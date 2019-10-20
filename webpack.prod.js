const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const nodeExternals = require('webpack-node-externals');

common.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
        { loader: 'babel-loader' }
    ]
});
module.exports = merge(common, {
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()],
    devtool: false
});