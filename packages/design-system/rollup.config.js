import { DEFAULT_EXTENSIONS } from '@babel/core';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

// import packageJSON from './package.json';

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
  ],
});

export default [
  // cjs
  buildJS(
    './index.ts',
    {
      // file: packageJSON.main
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
