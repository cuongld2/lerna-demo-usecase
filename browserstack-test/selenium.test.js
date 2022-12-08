const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver'); 
const {By} = require('selenium-webdriver');

const capabilities = {
    'os_version' : '10',
    'resolution' : '1920x1080',
    'browserName' : 'Chrome',
    'browser_version' : '95.0',
    'os' : 'Windows',
    'browserstack.debug' : 'true',
    'name': 'BStack-[NodeJS] Sample Test', // test name
    'build': 'BStack Build Number 1' // CI/CD job or build name
   }

   

test('selenium getting started',  async () => {

         let driver = new webdriver.Builder()
           .usingServer('http://testsignup_E2d6VG:GzmHqWyPNL984hwZyuvL@hub-cloud.browserstack.com/wd/hub')
           .withCapabilities(capabilities)
           .build();
           driver.get("http://e4cd-123-16-13-79.ngrok.io");
    
    
           const getElementByCss = async (localdriver, css, timeout = 10000) => {
            const el = await localdriver.wait(until.elementLocated(By.css(css)),timeout);
            return await localdriver.wait(until.elementIsVisible(el), timeout);
          };

          var fs = require('fs');

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
  return driver.takeScreenshot().then(function(data) {
      fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
          if(err) throw err;
      });
  })
};

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

driver.saveScreenshot('snapshot1.png')
await driver.takeScreenshot() 
        const movieName = "New movie for Thundra";
        const movieAuthor = "61b4778ba33fbf4e335cb1dd";
        const movieContent = "New movie for Thundra. New movie for Thundra . New movie for Thundra . New movie for Thundra . New movie for Thundra . New movie for Thundra. New movie for Thundra";
        const lnk = await getElementByCss(driver,"#root > div > nav > div > a:nth-child(2)");
        await lnk.click();
        const lnk1 = await getElementByCss(driver,"#root > div > div > div > form > input[type=text]");
        await lnk1.click();
    
        const lnk2 = await getElementByCss(driver,"#root > div > div > div > form > input[type=text]");
        await lnk2.sendKeys(movieName);
        
        driver.saveScreenshot('snapshot0.png')
await driver.takeScreenshot()

        const lnk3 = await getElementByCss(driver,"#root > div > div > div > form > textarea:nth-child(4)");
        await lnk3.sendKeys(movieContent);

        const lnk4 = await getElementByCss(driver,"#root > div > div > div > form > textarea:nth-child(6)");
        await lnk4.click();
        const lnk5 = await getElementByCss(driver,"#root > div > div > div > form > textarea:nth-child(6)");
        await lnk5.sendKeys(movieAuthor);
        
        driver.saveScreenshot('snapshot2.png')
await driver.takeScreenshot()
        const lnk6 = await getElementByCss(driver,"#root > div > div > div > form > button");
        await lnk6.click();
        await getElementByCss(driver,"#root > div > nav > h1");

        const element = await getElementByCss(driver,"#root > div > div > div > div > div:nth-child(5)");
        expect(movieName).toMatch(await element.getText());
         driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Yaay! my sample test passed"}}');
         await driver.quit();
       
    


});
