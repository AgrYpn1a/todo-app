module.exports = {
  ...require('@todo-app/config/nextjs.eslint'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
  ]
}
