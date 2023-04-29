/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/function-component-definition': 0,
    'react-refresh/only-export-components': 'warn',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'arrow-body-style': 0,
  },
};
