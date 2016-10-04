module.exports = function(config) {
    config.set({
        basePath: "",

        frameworks: ['jasmine'],


        files: [
            "src/lib/js/angular/angular.js",
            "src/lib/js/angular/angular-mocks.js",
            "src/lib/js/angular/angular-route.js",

            "src/app/js/app.js",
            "src/app/js/appConstants.js",
            "src/app/js/modules/**/*.js",

            "tests/**/*.spec.js"
        ],

        exclude: [ ],


        preprocessors: { },


        reporters: ["progress"],


        port: 9876,


        colors: true,


        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        browsers: ["PhantomJS"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}
