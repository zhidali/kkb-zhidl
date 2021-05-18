const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve('./', 'src/demo1.ts'),
    output: {
        path: path.resolve('./', 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve('./', 'public'),
        inline: true,
        host: 'localhost',
        proxy: {
        },
    },
    module: {
        rules: [{
            test: /(.ts)$/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
            }]
        }, 
        // {
        //     test: /(.js)$/,
        //     loader: 'eslint-loader',
        //     enforce: 'pre',
        //     exclude: /node_modules/,
        //     options: {
        //         configFile: './.eslintrc.js'
        //     }
        // }
    ]
    }
};