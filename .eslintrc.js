module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/require-default-prop': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      2,
      {
        printWidth: 500,
        tabWidth: 2,
        singleQuote: true,
        arrowParens: 'always',
        semi: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  },
  globals: {
    $nuxt: true
  },
}
