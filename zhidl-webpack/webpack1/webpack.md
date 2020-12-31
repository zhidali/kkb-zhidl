entry
output
mode
loader
plugin

chunk
bundle
module



webpack 




chunk 可以由一个模块或者多个模块构成
bundle  经过webpack流程解析编译后最终结输出的成果文件
module 模块 a.js b.js a.css


一个bundle对应一个chunk：对应一个module或者多个module


loader 让webpack认识更多的类型
webpack只支持 .js .json 类型的模块


plugin
对webpack的一个补充




[name] 文件名字占位符
[ext] 文件后缀名占位符

hash： 以项目为单位，项目内容没改变，则会生成新的hash，内容不变则hash不变
chunkhash：以chunk为单位，当一个文件内容改变，则整个chunk组的模块hash都会改变
contenthash：以自身内容为单位，





babel 编译js的
对js的语法支持非常好，默认就支持js，json模块。
目标浏览器环境





plugin
生命周期概念

启动webpack
1、