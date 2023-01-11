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

const commonPlugins = [commonjs()];

const configGenerator = ({ output: _output }) => ({
  input: './index.ts',
  output: {
    ..._output,
  },
  plugins: [
    nodeResolve({
      extensions,
    }),
    typescriptPlugin,
    ...commonPlugins,
  ],
});

export default [
  // cjs
  configGenerator({
    output: {
      // file: packageJSON.main,
      format: 'cjs',
    },
  }),
  // esm
  configGenerator({
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: '.',
    },
  }),
];
