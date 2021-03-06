'use strict';

module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: ['**/*/*_test.js'],
        exclude: ['**/*/bower_components'],
        preprocessors: {
            '!(patch)/**/!(*_test).js': ['coverage']
        },
        reporters: ['progress', 'junit', 'coverage'],
        junitReporter: {
            outputFile: 'target/test-results.xml'
        },
        coverageReporter: {
            type: 'cobertura',
            dir: 'target/coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false
    });
};
