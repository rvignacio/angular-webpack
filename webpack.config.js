let ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        }]
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    // Set where to save the output.
    output: {
        path: process.cwd(),
        filename: 'bundle.js'
    }
};
