﻿var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var CONTEXT_NAME = '/SpringAngular2/';
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist/app'),
        publicPath: 'http://localhost:8080'+CONTEXT_NAME,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
      new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});