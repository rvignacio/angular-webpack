let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

module.exports = {
    // Set a base path for the app files.
    context: path.join(process.cwd(), 'src'),

    // Set the first module to load.
    entry: './app',

    // Define all loaders.
    module: {
        loaders: [{
            // Transform all ES6 files to plain old ES5.
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel', 'ng-annotate', 'eslint']
        }, {
            // Transform all HTML templates with ngTemplate.
            test: /\.html$/,
            loaders: ['ngtemplate', 'html']
        }, {
            // Parse .less files.
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css!less' })
        }, {
            // Load .css files.
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css' })
        }, {
            // Load json files.
            test: /\.json$/,
            loaders: ['json']
        }, {
            // Load images.
            test: /\.(gif|jpe?g|png|svg)$/,
            loaders: ['url?limit=25000']
        }, {
            // Load fonts with optional version numbers.
            test: /\.(eot|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loaders: ['file']
        }]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            // Este plugin se utiliza para cargar jQuery por arriba del jQuery lite de Angular.
            jQuery: 'jquery'
        })
    ],

    // Set where to save the output.
    output: {
        path: process.cwd(),
        filename: 'bundle.js'
    }
};
