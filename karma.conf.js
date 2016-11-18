var webpack = require('karma-webpack-with-fast-source-maps');
var wp = require('webpack');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'webpack/unit-tests.js'
        ],

        //logLevel: config.LOG_DEBUG,

        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            webpack
        ],

        browsers: ['PhantomJS'],

        preprocessors: {
            'webpack/unit-tests.js': ['webpack']
        },

        reporters: ['coverage', 'junit', 'progress'],
        coverageReporter: {
            dir: '.tmp/reports/coverage',
            instrumenterOptions: {
                istanbul: {noCompact: true}
            },
            reporters: [{
                type: 'html', subdir: 'report-html'
            }, {
                type: 'cobertura', subdir: '.', file: 'cobertura.txt'
            }]
        },
        junitReporter: {
            outputDir: '.tmp/reports/junit',
            suite: 'brainiac-client',
            useBrowserName: false
        },

        webpack: {
            entry: './src/app.js',
            devtool: 'cheap-module-source-map',
            /*isparta: {
                embedSource: true,
                noAutoWrap: true
            },*/
            module: {
                loaders: [{
                    // Transform all ES6 files to plain old ES5.
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loaders: ['babel', 'ng-annotate', 'eslint']
                }, {
                    // Parse .less files.
                    test: /\.less$/,
                    /**
                     * Turns out that @import declarations in less files break
                     * the tests.
                     * Since we are running unit tests in PhantomJS, it doesn't
                     * make sense to parse .less files through the style, css
                     * and less loaders. We can just process them as simple files.
                     */
                    loaders: ['file']
                }, {
                    // Load .css files.
                    test: /\.css$/,
                    loaders: ['style', 'css']
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
                    test: /\.(eot|svg|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loaders: ['file']
                }, {
                    test: /\.js$/,
                    exclude: /(node_modules|\.test\.js$|http-mock\.js|webpack)/,
                    loader: 'isparta'
                }, {
                    // Load .html files
                    test: /\.html$/,
                    loader: 'html'
                }]
            },
            plugins: [
                new wp.ProvidePlugin({
                    jQuery: 'jquery'
                })
            ]
        },
        webpackMiddleware: {
            noInfo: true
        }
    });

    return;
};
