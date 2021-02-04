const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    // 暗号： 递归 zhidl
    const dirs = fs.readdirSync(path)
    return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${dirs.map(item => 
`{
    path: '/${item.replace('.vue', '')}',
    name: '${item.replace('.vue', '')}',
    component: () => import('./views/${item}')
},
`).join('')}
    ]
})`

}

