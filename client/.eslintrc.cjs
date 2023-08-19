module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'mocks'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/prop-types': 'off'
  }
}
