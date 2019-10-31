const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // historyApiFallback: true,
        hot: true
    },
    devtool: 'inline-source-map'
});