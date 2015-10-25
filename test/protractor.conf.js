// https://www.credera.com/blog/technology-insights/java/testing-angularjs-part-4-setting-e2e-testing-protractor/
// Before you can run your tests, your app will need to be running on a web server.

exports.config = {

    specs: [
        'e2e/**/*spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub', // default
    baseUrl: 'http://localhost:63342/angular-jasmine/app/'

}