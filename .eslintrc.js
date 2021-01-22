module.exports = {
  extends: ['taro/react'],
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  plugins: ['@typescript-eslint', 'react'], // 定义了该eslint文件所依赖的插件
  rules: {
    // 禁止使用var
    'no-var': "error",
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [
      "error",
      "interface"
    ]
  }
}
