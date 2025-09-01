import { mkdir, writeFile } from 'fs/promises';
import fs from 'fs';
import { join, dirname } from 'path';
import { created, fail } from '@/utils/logs';
import { fileURLToPath } from 'url';

export const add = async () => {
  try {
    const name = process.argv[3];

    if (!name) {
      fail('Missing component name!');
      process.exit(1);
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const componentPath = join(__dirname, 'ui', `${name}.astro`);

    const content = fs.readFileSync(componentPath, 'utf-8');

    if (!content) {
      fail('Invalid component name');
      process.exit(1);
    }

    const dir = join(process.cwd(), 'src/generated');

    if (!fs.existsSync(dir)) {
      await mkdir(dir);
    }

    await writeFile(join(dir, `${name}.astro`), content);

    created(name);
  } catch (error) {
    fail(error as string);
    process.exit(1);
  }
};
