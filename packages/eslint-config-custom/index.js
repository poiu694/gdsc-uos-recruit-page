module.exports = {
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', "import"],
  parser: '@typescript-eslint/parser',
  extends: ['prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
