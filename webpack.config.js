const path = require('path');

const config = {
    devtool: 'source-map',
    entry: {
        'app': './src/index'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/u,
                loader: 'babel-loader',
                test: /\.js$/u
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    }
};

module.exports = config;
