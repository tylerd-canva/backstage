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

import { version as cliVersion } from '../../package.json';
import os from 'os';
import { paths } from '../lib/paths';
import { detectPackageManager } from '../lib/pacman';
import fs from 'fs-extra';

export default async () => {
  await new Promise(async () => {
    const pacman = await detectPackageManager();
    const isLocal = fs.existsSync(paths.resolveOwn('./src'));

    const backstageFile = paths.resolveTargetRoot('backstage.json');
    let backstageVersion = 'N/A';
    if (fs.existsSync(backstageFile)) {
      try {
        const backstageJson = await fs.readJSON(backstageFile);
        backstageVersion = backstageJson.version ?? 'N/A';
      } catch (error) {
        console.warn('The "backstage.json" file is not in the expected format');
        console.log();
      }
    }

    console.log(`OS:   ${os.type} ${os.release} - ${os.platform}/${os.arch}`);
    console.log(`node: ${process.version}`);
    console.log(`${pacman.name()}: ${pacman.version()}`);
    console.log(`cli:  ${cliVersion} (${isLocal ? 'local' : 'installed'})`);
    console.log(`backstage:  ${backstageVersion}`);
    console.log();
    console.log('Dependencies:');
    const lockfile = await pacman.loadLockfile();

    const deps = [...lockfile.keys()].filter(n => n.startsWith('@backstage/'));
    const maxLength = Math.max(...deps.map(d => d.length));

    for (const dep of deps) {
      const versions = new Set(lockfile.get(dep)!.map(i => i.version));
      console.log(`  ${dep.padEnd(maxLength)} ${[...versions].join(', ')}`);
    }
  });
};
