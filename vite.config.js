import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'MyLib',
      fileName: 'my-lib',
    },
    rollupOptions: {
      external: [
        //
      ],
      output: {
        globals: {
          //
        },
      },
    },
  },
});
