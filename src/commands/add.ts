import { readFile, mkdir, writeFile } from 'fs/promises';
import fs from 'fs';
import { join } from 'path';

export const add = async () => {
  const name = process.argv[3];

  !name && process.exit(1);

  const path = join(process.cwd(), `src/ui/${name}.head.astro`);

  const content = await readFile(path, 'utf-8');
  const dir = join(process.cwd(), 'components/ui');

  if (!fs.existsSync(dir)) {
    await mkdir(dir);
  }

  await writeFile(join(dir, `${name}.astro`), content);

  console.log(`Agregad con extio: ${name}.astro`);
};
