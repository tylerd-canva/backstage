/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ChildProcess,
  execFile as execFileCb,
  spawn,
  SpawnOptions,
} from 'child_process';
import { promisify } from 'util';
import { ExitCodeError } from './errors';

export const execFile = promisify(execFileCb);

type LogFunc = (data: Buffer) => void;

type SpawnOptionsPartialEnv = Omit<SpawnOptions, 'env'> & {
  env?: Partial<NodeJS.ProcessEnv>;
  // Pipe stdout to this log function
  stdoutLogFunc?: LogFunc;
  // Pipe stderr to this log function
  stderrLogFunc?: LogFunc;
};

// Runs a child command, returning a promise that is only resolved if the child exits with code 0.
export async function run(
  name: string,
  args: string[] = [],
  options: SpawnOptionsPartialEnv = {},
) {
  const { stdoutLogFunc, stderrLogFunc } = options;
  const env: NodeJS.ProcessEnv = {
    ...process.env,
    FORCE_COLOR: 'true',
    ...(options.env ?? {}),
  };

  const stdio = [
    'inherit',
    stdoutLogFunc ? 'pipe' : 'inherit',
    stderrLogFunc ? 'pipe' : 'inherit',
  ] as ('inherit' | 'pipe')[];

  const child = spawn(name, args, {
    stdio,
    shell: true,
    ...options,
    env,
  });

  if (stdoutLogFunc && child.stdout) {
    child.stdout.on('data', stdoutLogFunc);
  }
  if (stderrLogFunc && child.stderr) {
    child.stderr.on('data', stderrLogFunc);
  }

  await waitForExit(child, name);
}

async function waitForExit(
  child: ChildProcess & { exitCode: number | null },
  name?: string,
): Promise<void> {
  if (typeof child.exitCode === 'number') {
    if (child.exitCode) {
      throw new ExitCodeError(child.exitCode, name);
    }
    return;
  }

  await new Promise<void>((resolve, reject) => {
    child.once('error', error => reject(error));
    child.once('exit', code => {
      if (code) {
        reject(new ExitCodeError(code, name));
      } else {
        resolve();
      }
    });
  });
}
