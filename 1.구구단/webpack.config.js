const path = require('path');

module.exports = {
    mode: 'development', // 개발시에는 developement, 배포시에는 'production'
    devtool: 'eval', // production일 때는 hidden-source-map
    resolve: {  // 얘는 확장자 
        extensions: ['.jsx', '.js']
    }, 
    entry: {
        app: './client' // 이 분은 entry를 client.jsx 로 만듬
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions'],
                            esmodules: true,
                        }
                    }], 
                    '@babel/preset-react'
                ],
                plugins: []
            }
        }],
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
}