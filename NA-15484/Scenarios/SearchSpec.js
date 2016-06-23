var RefPage = require('.././pages/RefPage_'+browser.params.Env+'.js');
var LenRegisPage = require('.././pages/LenRegisPage_'+browser.params.Env+'.js');
var TestData = require('.././data/TestData_'+browser.params.Env+'.json');//Hmc Data
var Data = require('.././data/Data.json'); // B2B Data
var Region = require('.././Region/URLData_'+browser.params.Env+'.json');

describe('Search', function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    var refPage = new RefPage();
    var lenRegisPage = new LenRegisPage();
    var date = new Date("yyyy-MM-dd HH:mm:ss");
    var valid_Yopmail = date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + "@yopmail.com"
    var browserB = browsers.b;
    browserB.ignoreSynchronization = true;
    browserB.get(Region.HMC); //Hmc 1st Envt
    browserB.driver.manage().timeouts().implicitlyWait(8000);
    //browserB.driver.manage().window().maximize();

    var browserA = browsers.a;
    browserA.ignoreSynchronization = true;
    browserA.get(Region.NA_B2B);
    //browserA.driver.manage().timeouts().implicitlyWait(8000);
    //browserA.driver.manage().window().maximize();

    //int randomNum = rand.nextInt((max-min) + 1) +min;

//---------------Hmc Part1-------------------------------
it('check1', function() {

    //Enter Hmc username
    browserB.driver.findElement(by.xpath(refPage.HmcUsername)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.HmcUsername)).clear();
    browserB.driver.findElement(by.xpath(refPage.HmcUsername)).sendKeys(TestData.Username_Hmc);
    // Enter Hmcpassword
    browserB.driver.findElement(by.xpath(refPage.HmcPassword)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.HmcPassword)).clear();
    browserB.driver.findElement(by.xpath(refPage.HmcPassword)).sendKeys(TestData.Password_Hmc);
    //Click on Hmclogin
    browserB.driver.findElement(by.xpath(refPage.Login)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.Login)).click();
    // Click on B2B Commerce
    browserB.driver.findElement(by.xpath(refPage.B2BCommerce)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.B2BCommerce)).click();
    //Click on B2B Unit
    browserB.driver.findElement(by.xpath(refPage.B2BUnit)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.B2BUnit)).click();
    //Enter ID VAlue 1
    browserB.driver.findElement(by.xpath(refPage.IDSearch)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.IDSearch)).sendKeys(TestData.ID_Value);
    // Click on Search Button
    browserB.driver.findElement(by.xpath(refPage.SearchButton)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.SearchButton)).click();
    browserB.driver.sleep(8000);
    //Select the Value 1 Displayed
    browserB.driver.findElement(by.partialLinkText(refPage.SelectedValue)).isDisplayed();
    browserB.driver.findElement(by.partialLinkText(refPage.SelectedValue)).click();
    //Click on Site Attributes
    browserB.driver.findElement(by.xpath(refPage.SiteAttributes)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.SiteAttributes)).click();
    browserB.driver.sleep(8000);
    // Click on User Approval
    browserB.driver.findElement(by.xpath(refPage.UserApproveal)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.UserApproveal)).click();
    //Click on Save Button
    browserB.driver.findElement(by.xpath(refPage.SaveButton)).isDisplayed();
    browserB.driver.findElement(by.xpath(refPage.SaveButton)).click();
    browserB.driver.sleep(100000);
  });



  // ------------------------------------B2B- 1st part------------
it('check2', function() {

  //Click on the CreateMyAccount button without providing any input

  browserA.driver.findElement(by.xpath(refPage.CreateAnAccount)).click();//create Account
  browserA.driver.findElement(by.xpath(refPage.AccessLevel)).click();
  browserA.driver.sleep(3000);
  browserA.driver.findElement(by.xpath(refPage.DefaultStore)).click();
  browserA.driver.sleep(3000);
  browserA.driver.findElement(by.xpath(refPage.Role)).click();
  browserA.driver.sleep(3000);
  browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();


          //Fill all details correct except Email format
          // Fill invalid_Email
          browserA.driver.findElement(by.xpath(refPage.EmailID)).sendKeys(Data.Invalid_Email);
          browserA.driver.findElement(by.xpath(refPage.ConEmail)).sendKeys(Data.Invalid_Email);
          browserA.driver.findElement(by.xpath(refPage.FName)).sendKeys(Data.First_Name);
          browserA.driver.findElement(by.xpath(refPage.LName)).sendKeys(Data.Last_Name);
          browserA.driver.findElement(by.xpath(refPage.Password)).sendKeys(Data.Valid_Password);
          browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).sendKeys(Data.Valid_Password);
          browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();

              //Fill incorrect email address in the confirm email text box

              browserA.driver.findElement(by.xpath(refPage.EmailID)).clear();
              browserA.driver.findElement(by.xpath(refPage.EmailID)).sendKeys(Data.Valid_Email);
              browserA.driver.findElement(by.xpath(refPage.ConEmail)).clear();
              browserA.driver.findElement(by.xpath(refPage.ConEmail)).sendKeys(Data.Different_Email);
              browserA.driver.findElement(by.xpath(refPage.FName)).clear();
              browserA.driver.findElement(by.xpath(refPage.FName)).sendKeys(Data.First_Name);
              browserA.driver.findElement(by.xpath(refPage.LName)).clear();
              browserA.driver.findElement(by.xpath(refPage.LName)).sendKeys(Data.Last_Name);
              browserA.driver.findElement(by.xpath(refPage.Password)).clear();
              browserA.driver.findElement(by.xpath(refPage.Password)).sendKeys(Data.Valid_Password);
              browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).clear();
              browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).sendKeys(Data.Valid_Password);

              browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();
                  browserA.driver.findElement(by.xpath(refPage.ConEmailError)).getText().then(function(text){
                    if(text=="Email and confirm email don't match"){
                      console.log("The displayed error message is correct and is"+text);
                    }
                    else {
                      console.log("Incorrect error message is displayed");
                    }
                  });

  //Input Password less than 8 characters


  browserA.driver.findElement(by.xpath(refPage.EmailID)).clear();
  browserA.driver.findElement(by.xpath(refPage.EmailID)).sendKeys(Data.Valid_Email);
  browserA.driver.findElement(by.xpath(refPage.ConEmail)).clear();
  browserA.driver.findElement(by.xpath(refPage.ConEmail)).sendKeys(Data.Valid_Email);
  browserA.driver.findElement(by.xpath(refPage.FName)).clear();
  browserA.driver.findElement(by.xpath(refPage.FName)).sendKeys(Data.First_Name);
  browserA.driver.findElement(by.xpath(refPage.LName)).clear();
  browserA.driver.findElement(by.xpath(refPage.LName)).sendKeys(Data.Last_Name);
  browserA.driver.findElement(by.xpath(refPage.Password)).clear();
  browserA.driver.findElement(by.xpath(refPage.Password)).sendKeys(Data.Small_Password);
  browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).clear();
  browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).sendKeys(Data.Small_Password);

  browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();
  browserA.driver.sleep(3000);
      browserA.driver.findElement(by.xpath(refPage.PasswordError)).getText().then(function(text){
        if(text=="Passwords must contain at least 8 characters and include two of the following character types: letters, numbers, or symbols"){
          console.log("The displayed error message is correct and is"+text);
        }
        else {
          console.log("Incorrect error message is displayed");
        }
      });
  //Input different password in the confirm password field


  browserA.driver.findElement(by.xpath(refPage.EmailID)).clear();
  browserA.driver.findElement(by.xpath(refPage.EmailID)).sendKeys(Data.Valid_Email);
  browserA.driver.findElement(by.xpath(refPage.ConEmail)).clear();
  browserA.driver.findElement(by.xpath(refPage.ConEmail)).sendKeys(Data.Valid_Email);
  browserA.driver.findElement(by.xpath(refPage.FName)).clear();
  browserA.driver.findElement(by.xpath(refPage.FName)).sendKeys(Data.First_Name);
  browserA.driver.findElement(by.xpath(refPage.LName)).clear();
  browserA.driver.findElement(by.xpath(refPage.LName)).sendKeys(Data.Last_Name);
  browserA.driver.findElement(by.xpath(refPage.Password)).clear();
  browserA.driver.findElement(by.xpath(refPage.Password)).sendKeys(Data.Valid_Password);
  browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).clear();
  browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).sendKeys(Data.Different_Password);

  browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();
      browserA.driver.findElement(by.xpath(refPage.ConfirmPassError)).getText().then(function(text){
        if(text=="Password and password confirmation do not match"){
          console.log("The displayed error message is correct and is"+text);
        }
        else {
          console.log("Incorrect error message is displayed");
        }
      });

      //Input already registered email ID
      browserA.driver.findElement(by.xpath(refPage.EmailID)).clear();
      browserA.driver.findElement(by.xpath(refPage.EmailID)).sendKeys(Data.Already_Reg_Email);
      browserA.driver.findElement(by.xpath(refPage.ConEmail)).clear();
      browserA.driver.findElement(by.xpath(refPage.ConEmail)).sendKeys(Data.Already_Reg_Email);
      browserA.driver.findElement(by.xpath(refPage.FName)).clear();
      browserA.driver.findElement(by.xpath(refPage.FName)).sendKeys(Data.First_Name);
      browserA.driver.findElement(by.xpath(refPage.LName)).clear();
      browserA.driver.findElement(by.xpath(refPage.LName)).sendKeys(Data.Last_Name);
      browserA.driver.findElement(by.xpath(refPage.Password)).clear();
      browserA.driver.findElement(by.xpath(refPage.Password)).sendKeys(Data.Valid_Password);
      browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).clear();
      browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).sendKeys(Data.Valid_Password);
      browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();

  //Input all of the valid details
  browserA.driver.findElement(by.xpath(refPage.EmailID)).clear();
  browserA.driver.findElement(by.xpath(refPage.EmailID)).sendKeys(valid_Yopmail);
  browserA.driver.findElement(by.xpath(refPage.ConEmail)).clear();
  browserA.driver.findElement(by.xpath(refPage.ConEmail)).sendKeys(valid_Yopmail);
  browserA.driver.findElement(by.xpath(refPage.FName)).clear();
  browserA.driver.findElement(by.xpath(refPage.FName)).sendKeys(Data.First_Name);
  browserA.driver.findElement(by.xpath(refPage.LName)).clear();
  browserA.driver.findElement(by.xpath(refPage.LName)).sendKeys(Data.Last_Name);
  browserA.driver.findElement(by.xpath(refPage.Password)).clear();
  browserA.driver.findElement(by.xpath(refPage.Password)).sendKeys(Data.Valid_Password);
  browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).clear();
  browserA.driver.findElement(by.xpath(refPage.ConfirmPass)).sendKeys(Data.Valid_Password);
  browserA.driver.sleep(3000);
  browserA.driver.findElement(by.xpath(refPage.CreateMyAccount)).click();
  browserA.driver.sleep(3000);
  browserA.driver.findElement(by.xpath(refPage.ThankYouMsg)).getText().then(function(text){
    if(text=="Thank You For Creating An Account")
    {
      console.log("The displayed message showing successful registration is correct and is "+text);
    }
    else {
      console.log("Incorrect successful message is displayed");
    }
  });


});

it('check3', function() {

      //Click on B2B Customer
      browserB.driver.findElement(by.xpath(refPage.B2BCustomer)).isDisplayed();
      browserB.driver.findElement(by.xpath(refPage.B2BCustomer)).click();
      // Click on ID Search Box-2
      browserB.driver.findElement(by.xpath(refPage.IDSearch2)).isDisplayed();
      browserB.driver.findElement(by.xpath(refPage.IDSearch2)).sendKeys(TestData.ID_Value2);
      // Click on Search Button2
      browserB.driver.findElement(by.xpath(refPage.SearchButton2)).isDisplayed();
      browserB.driver.findElement(by.xpath(refPage.SearchButton2)).click();
      browserB.driver.sleep(5000);
      //Select the Value Displayed
      browserB.driver.findElement(by.xpath(refPage.SelectedValue2)).isDisplayed();
      browserB.driver.findElement(by.xpath(refPage.SelectedValue2)).click();
      browserB.driver.sleep(5000);
      //Click on Password Tab
      browserB.driver.findElement(by.xpath(refPage.PasswordTab)).isDisplayed();
      browserB.driver.findElement(by.xpath(refPage.PasswordTab)).click();
      // Select the Value in Dropdown as- ACTIVE
      browserB.driver.findElement(by.xpath(refPage.DropdownValue)).isDisplayed();
      browserB.driver.findElement(by.xpath(refPage.DropdownValue)).click();
      browserB.driver.sleep(3000);
      browserB.driver.findElement(by.xpath(refPage.DropdownValue)).sendKeys("ACTIVE");
      browserB.actions().sendKeys(protractor.Key.ENTER).perform();
      browserB.driver.sleep(5000);
      // Click on Save Button
      browserB.driver.findElement(by.xpath(refPage.SaveButton2)).click();
      browserB.driver.sleep(5000);
  });

it('check4', function() {
browserA.get('https://crt-hybris.lenovo.com/le/1213350638/us/en/1213414740/login');
browserA.driver.sleep(5000);
browserA.driver.findElement(by.xpath(refPage.B2BUsername)).sendKeys(TestData.ID_Value2); //b2b login username
browserA.driver.findElement(by.xpath(refPage.B2BPassword)).sendKeys(TestData.Password_Hmc);//login password
browserA.driver.findElement(by.xpath(refPage.B2BLogin)).click();//login button
//browserA.driver.findElement(by.xpath(".//*[@id='nemob2bRegisterForm']/button")).click(); //Go to My Account Button
browserA.driver.sleep(10000);
});
  });
