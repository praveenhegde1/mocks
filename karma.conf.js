module.exports = function(config) {
  config.set({
    // Base path that will be used to resolve files and patterns.
    basePath: '',

    // Frameworks to use.
    frameworks: ['jasmine', 'jasmine-spec-tags'], // or 'mocha', 'qunit', etc.

    // List of files/patterns to load in the browser.
    files: [
      './src/*.js',   // Your source code files.
      './spec/*.spec.js' // Your test spec files.
    ],

    // List of files/patterns to exclude.
    exclude: [],

    // Preprocess matching files before serving them to the browser.
    preprocessors: {
    //  'path/to/your/source/files.js': ['coverage'] // Add preprocessors as needed.
    },

    // Test results reporter(s).
    reporters: ['progress', 'coverage'], // or 'dots', 'html', 'mocha', etc.

    // Coverage reporter configuration.
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // Web server port.
    port: 9876,

    // Enable/disable colors in the output (reporters and logs).
    colors: true,

    // Logging level.
    logLevel: config.LOG_INFO, // or config.LOG_DEBUG, config.LOG_ERROR, etc.

    // Enable/disable watching file and executing tests whenever any file changes.
    autoWatch: true,

    // Continuous Integration (CI) mode.
    singleRun: true,

    // Concurrency level. How many browser instances should be started simultaneously.
    concurrency: 1,

    // Browser launchers.
    browsers: ['Chrome',], // or 'Safari', 'Edge', 'PhantomJS', etc.

    // Configuration for headless browsers.
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--no-sandbox', '--remote-debugging-port=9222'],
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
      // Add more custom launchers as needed.
    },

    // List of plugins to load.
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
      'karma-babel-preprocessor',
      'karma-jasmine-html-reporter',
      // Add more plugins as needed.
    ],

    // Add additional middleware, if required.
    // middleware: [],

    // Add custom client configuration.
    client: {
      // Options for the client.
      // captureConsole: true,
      // clearContext: false,
      // ...
    },

    // Add custom server configuration.
    // server: {},

    // Proxy configuration, if required.
    // proxies: {},

    // URL root path for the Karma server.
    // urlRoot: '/',

    // Timeouts configuration.
    // captureTimeout: 60000,
    // browserDisconnectTimeout: 2000,
    // browserDisconnectTolerance: 0,
    // browserNoActivityTimeout: 30000,

    // Plugins that should be loaded by Karma.
    // plugins: [],

    // Configure the level of detail for the coverage information.
    // coverageIstanbulReporter: {},

    // Add additional reporters for coverage or other purposes.
    // reporters: [],

    // Custom launchers configuration.
    // customLaunchers: {},

    // browserConsoleLogOptions: {},

    // flags to pass to Chrome browser when using the 'Chrome' launcher.
    // flags: [],

    // Continuous Integration (CI) mode if needed.
    // singleRun: true,

    // List of browsers to launch for testing.
    // browsers: [],

    // Set the browser window size for tests, if needed.
    // browserWindow: {},

    // Some more Karma options can be set here. Please check the documentation.
    // ...

    // Configure the number of retries for failed tests (for flaky tests).
    // retryLimit: 2,
  });
};
