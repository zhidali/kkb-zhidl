module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用var
    'no-var': "error",
    'import/no-commonjs': 0,
    // 优先使用 interface 而不是 type
    // "no-unused-vars": ["error", { "args": "after-used" }]
  }
}