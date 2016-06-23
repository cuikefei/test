var RefPage = (function() {

  RefPage.prototype.get = function() {
  //  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    browser.ignoreSynchronization = true;
    //browser.driver.manage().window().maximize();
    //browser.get('http://preprod-emea-lenovo.hybris.hec.ondemand.com/au/en');
  //  browser.get('http://preprod-lenovo.hybris.hec.ondemand.com/hmc/hybris');
  };
  function RefPage() {
    //--------Hmc Links---------------
   this.HmcUsername = ".//*[@id='Main_user']";
   this.HmcPassword = ".//*[@id='Main_password']";
   this.Login       = ".//span[@id='Main_label']";
   this.B2BCommerce = "//*[@id='Tree/GenericExplorerMenuTreeNode[b2bcommercegroup]_label']";
   this.B2BUnit     = "//*[@id='Tree/GenericLeafNode[B2BUnit]_label'][contains(.,'B2B Unit')]";
   this.IDSearch    = "//*[@id='Content/StringEditor[in Content/GenericCondition[B2BUnit.uid]]_input']";
   this.SearchButton = "//*[@id='Content/NemoSearchConfigurable[B2BUnit]_searchbutton']";
   this.SelectedValue  = "1213414740 - ROWAN UNIVERSITY";
   this.SiteAttributes = "//*[@id='Content/EditorTab[B2BUnit.tab.siteattributes]_span']";
   this.UserApproveal = "(//label[contains(.,'Yes')] )[1]";
   this.SaveButton    = ".//*[@id='Content/ConfirmImageToolbarAction[organizer.editor.save.title]_label']";
   this.B2BCustomer   = "//*[@id='Tree/GenericLeafNode[B2BCustomer]_label']";
   this.IDSearch2     = ".//*[@id='Content/StringEditor[in Content/GenericCondition[B2BCustomer.uid]]_input']";
   this.SearchButton2 = ".//*[@id='Content/NemoSearchConfigurable[B2BCustomer]_searchbutton']";
   this.SelectedValue2 = "//div/a[@title='Open Editor']/span/img";
   this.PasswordTab    = ".//a/span[contains(.,'Password')]";
   this.DropdownValue  = ".//*[@id='Content/EnumerationValueSelectEditor[in Content/Attribute[B2BCustomer.b2BUserStatus]]_select']";
   this.SaveButton2    = ".//*[@id='Content/ImageToolbarAction[organizer.editor.save.title]_img']";

   //B2B Links
   this.CreateAnAccount = "//*[@id='mainContent']/div[2]/div/div[2]/div[2]/a";
   this.CreateMyAccount = ".//*[@id='nemob2bRegisterForm']/button";

   this.AccessLevel = ".//*[@id='accessLevel']/li/ul/li[1]/input";
   this.DefaultStore = ".//*[@id='defaultDmuSoldTo-table']/tbody/tr/td[1]/input";
   this.Role = ".//*[@id='2']";

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

    this.B2BUsername = ".//*[@id='login.email.id']";
    this.B2BPassword = ".//*[@id='login.password']";
    this.B2BLogin       = ".//*[@id='loginForm']/button";

  }
  return RefPage;

})()

module.exports = RefPage;
