var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var reporter = new Jasmine2HtmlReporter({
    savePath: './test-report/reports/',
    showSummary: true,
    showQuickLinks: true,
    showConfiguration: true,
    screenshotsFolder: 'images',
    consolidate: false,
    consolidateAll: false,
    cleanDestination: true,
    fileName: 'ProtractorDemo'
    //showPassed: false  //This option, if false, will show only failures.
});
var timeout = 120000;

exports.config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "https://mail.ru/",
    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['specs/*[sS]pec.js'],
    /*multiCapabilities: [{
        browserName: 'firefox'
      }, {
        browserName: 'chrome'
      }],*/
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        count:2
    },
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,   // Use colors in the command line report.  
        defaultTimeoutInterval: 50000,  // Time to wait in ms before a test fails. Default value = 30000
        isVerbose: true,
        includeStackTrace: true
    },

    allScriptsTimeout:timeout,
    getPageTimeout:timeout,

    onPrepare: function () {
        browser.driver.manage().window().setSize(1600, 800)
        jasmine.getEnv().addReporter(reporter);
        browser.waitForAngularEnabled(false); //turn off validation in AngularJS
        require('@hetznercloud/protractor-test-helper/').installMatcher();
    }
}