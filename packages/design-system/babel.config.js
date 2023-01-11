function isFormat(format) {
  const BABEL_ENV = process.env.BABEL_ENV;
  if (typeof BABEL_ENV !== 'undefined') {
    return BABEL_ENV === format;
  }
  return false;
}
const isCJS = isFormat('cjs');
const isESM = isFormat('esm');

const commonPresets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  '@babel/preset-react',
  ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
];

export default {
  env: {
    test: {
      presets: [...commonPresets],
      plugins: ['@babel/plugin-transform-runtime'],
    },
    build: {
      presets: [...commonPresets],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
