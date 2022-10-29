/* eslint-env node */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import externals from 'rollup-plugin-node-externals';
import del from 'rollup-plugin-delete';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    plugins: [
      del({ targets: 'dist/*' }),
      externals({ deps: true }),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      scss({
        output: 'dist/assets/css/design-system.css',
        failOnError: true,
      }),
      copy({
        targets: [
          { src: 'src/assets/fonts/**/*', dest: 'dist/assets/fonts' },
          { src: 'src/assets/img/**/*', dest: 'dist/assets/img' },
        ],
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
