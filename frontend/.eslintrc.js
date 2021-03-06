module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'prettier'
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0
  }
};
