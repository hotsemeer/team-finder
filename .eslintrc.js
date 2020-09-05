module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/eqeqeq': 'warning',
    'vue/space-unary-ops': 'error',
    'vue/space-infix-ops': 'error',
    'vue/no-restricted-syntax': 'warning',
    'vue/object-curly-spacing': 'error',
    'vue/script-indent': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'warning',
    'vue/component-name-in-template-casing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error'
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript',
  ],

  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript'
  ]
};
