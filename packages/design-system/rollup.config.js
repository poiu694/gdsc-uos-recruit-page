import fs from 'fs';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const loadJSON = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const packageJSON = loadJSON('./package.json');

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

const typescriptPlugin = typescript({
  tsconfig: './tsconfig.json',
  useTsconfigDeclarationDir: true,
  tsconfigDefaults: {
    noEmit: false,
    emitDeclarationOnly: true,
  },
});

const buildJS = (input, output, format) => ({
  input,
  output: { ...output, ...format },
  plugins: [
    nodeResolve({
      extensions,
    }),
    // common plugins
    typescriptPlugin,
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
    peerDepsExternal()
  ],
  external: [/@babel\/runtime/], // babel
});

export default [
  // cjs
  buildJS(
    './index.ts',
    {
      file: `./dist/${packageJSON.main}`
    },
    'cjs'
  ),
  // esm
  buildJS(
    './index.ts',
    {
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: '.',
    },
    'esm'
  ),
];
