const path = require('path'); // 노드에서 경로를 쉽게 조작하는 것을 제공하는 데 그게 path! path를 일단 불러오고 

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client.jsx' ],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'), // 현재폴더의 dist
        filename: 'app.js'
    }, // 출력

}