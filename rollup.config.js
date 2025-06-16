import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';

export default [
  // ES Modules build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.esm.js',
      format: 'es'
    },
    plugins: [
      resolve(),
      filesize()
    ]
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      resolve(),
      filesize()
    ]
  },
  // UMD build (for browsers)
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'Insight42Utils',
      exports: 'named'
    },
    plugins: [
      resolve(),
      terser(),
      filesize()
    ]
  }
];
