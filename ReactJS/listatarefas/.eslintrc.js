module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'react/state-in-constructor': 0,
    'no-unsafe-optional-chaining': 0,
    'no-nonoctal-decimal-escape': 0,
    'import/no-duplicates': 0,
    'react/forbid-prop-types': 0,
  },
};
