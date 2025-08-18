import { defineConfig } from 'tsup';
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths';
import fs from 'fs';

export default defineConfig({
  entry: ['src/index.ts'],
  noExternal: ['.astro'], // fuerza a no procesar .astro
  onSuccess: async () => {
    await fs.promises.cp('src/ui', 'dist/ui', { recursive: true });
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  minify: true,
  clean: true,
  outDir: 'dist',
  outExtension() {
    return {
      js: '.mjs',
    };
  },
  banner: {
    js: '#!/usr/bin/env node',
  },
  esbuildPlugins: [TsconfigPathsPlugin({})],
});
