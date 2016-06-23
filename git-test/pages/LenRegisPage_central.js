var LenRegisPage = (function() {

  LenRegisPage.prototype.get = function() {
  //  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    browser.ignoreSynchronization = true;
    //browser.driver.manage().window().maximize();
    //browser.get('http://preprod-emea-lenovo.hybris.hec.ondemand.com/au/en');
  //  browser.get('http://preprod-lenovo.hybris.hec.ondemand.com/hmc/hybris');
  };
  function LenRegisPage() {
    //--------B2B Links---------------
        this.CreateAnAccount = "//*[@id='mainContent']/div[2]/div/div[2]/div[2]/a";
        this.CreateMyAccount = ".//*[@id='nemob2bRegisterForm']/button";

        this.AccessLevel = ".//*[@id='accessLevel']/li/ul/li[3]/input";
        this.DefaultStore = ".//*[@id='defaultDmuSoldTo-table']/tbody/tr/td[1]/input";
        this.Role = ".//input[@id='role2']";

         //Xpaths for the error messages
         this.EmailError = ".//*[@id='email.errors']";
         this.ConEmailError = ".//*[@id='chkEmail.errors']";
         this.FNameError = ".//*[@id='firstName.errors']";
         this.LNameError = ".//*[@id='lastName.errors']";
         this.PasswordError = ".//*[@id='pwd.errors']";
         this.ConfirmPassError = ".//*[@id='checkPwd.errors']";

         //Xpaths for the account creation process
         this.EmailID = ".//*[@id='register.email']";
         this.ConEmail = ".//*[@id='register.chkEmail']";
         this.FName = ".//*[@id='register.firstName']";
         this.LName = ".//*[@id='register.lastName']";
         this.Password = ".//*[@id='password']";
         this.ConfirmPass = ".//*[@id='register.checkPwd']";
         this.ThankYouMsg = ".//*[@id='mainContent']/div/div/font";

         //this.AlreadyRegisEmailError = "//*[@id='mainContent']/div[1]/div/div/div/div";
         //this.InvalidEmailError = ".//*[@id='accErrorMsgs']/ul/li";

  }
  return LenRegisPage;

})()

module.exports = LenRegisPage;
