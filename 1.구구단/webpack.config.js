const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: ['web', 'es5'],
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.jsx', '.js']
    }, 
    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'],
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins: []
            }
        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
}