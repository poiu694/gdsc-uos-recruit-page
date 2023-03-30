import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

const typescriptPlugin = typescript({
  tsconfig: './tsconfig.json',
  useTsconfigDeclarationDir: true,
  tsconfigDefaults: {
    noEmit: false,
    emitDeclarationOnly: true,
  },
});

const buildJS = (input, _output, format) => ({
  input,
  output: { ..._output, format },
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
    peerDepsExternal(),
  ],
  external: [/@babel\/runtime/], // babel
});

export default [
  // cjs
  buildJS(
    './src/index.ts',
    {
      dir: './dist',
    },
    'cjs'
  ),
  // esm
  buildJS(
    './src/index.ts',
    {
      dir: './esm',
      preserveModules: true,
      preserveModulesRoot: '.',
    },
    'esm'
  ),
];
