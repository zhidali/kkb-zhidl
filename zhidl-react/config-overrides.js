const {override, fixBabelImports} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    // antd 按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)