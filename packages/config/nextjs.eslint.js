const pathJoin = require('path').join;

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    pathJoin(__dirname, "base.eslint.js"),
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    // react
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],

    // next
    '@next/next/no-html-link-for-pages': 'off',
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}