module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-extra-parens': ['error', 'all'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
  },
};
