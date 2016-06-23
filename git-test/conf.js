var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter=new HtmlReporter({
    baseDirectory: '.././Reports', takeScreenShotsOnlyForFailedSpecs: true, // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName:  'protractor-demo-tests-report.html'
});
exports.config = {
    framework: 'jasmine',
	//The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
 //Here we specify the name of the specs files.
//  specs: ['spec.js']
    specs: ['Scenarios/SearchSpec.js'],
    params: {
      Env: "default"
    },
    //specs: ['scenarios/PriceValidation/*Spec.js'],
    onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
   },

capabilities: {
      browserName: 'chrome'
    },

  suites : {
     //homepage : 'scenarios/HomePage/*Spec.js',
     //PriceValidation : 'scenarios/PriceValidation/*Spec.js',
     //PriceValidationNegative : 'scenarios/PriceValidation/*Spec.js'
    // SearchSpec : 'Scenarios/TC-001/SearchSpec.js',
     //SearchPage : 'Scenarios/TC-001/SearchSpec.js'

     SearchSpec : 'Scenarios/NA-15484/SearchSpec.js'
},

onPrepare: function() {
    global.browsers = {
      a: browser,
      b: browser.forkNewDriverInstance()
    };
  },

  jasmineNodeOpts: {
     defaultTimeoutInterval: 500000
}
};
