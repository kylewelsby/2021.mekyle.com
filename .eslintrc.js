module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:gridsome/recommended',
  ],
  plugins: ['prettier'],
  rules: {},
}
