import { mkdir, writeFile } from 'fs/promises';
import fs from 'fs';
import { join } from 'path';
import { components } from '@/ui/sender';
import { created, fail } from '@/utils/logs';

export const add = async () => {
  const name = process.argv[3] as keyof typeof components;

  if (!name) {
    fail('Missing component name!');
    process.exit(1);
  }

  const content = components[name];

  const dir = join(process.cwd(), 'src/.generated');

  if (!fs.existsSync(dir)) {
    await mkdir(dir);
  }

  await writeFile(join(dir, `${name}.astro`), content);

  created(name);
};
