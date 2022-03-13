module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/indent': ['warn', 'tab'],
    'linebreak-style': ['error', 'windows'],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'no-tabs': 'off',
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 4,
        comments: 300,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'import/no-cycle': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-bitwise': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': [0],
  },
};
