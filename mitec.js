const {Builder, By, Key} = require('selenium-webdriver');

const mitecLogin = async () => {
    const driver = new Builder().forBrowser('chrome').build();
    await driver.get("https://mitec.itesm.mx")
    await driver.sleep("2000")
    await driver.findElement(By.name("Ecom_User_ID")).sendKeys("")
    await driver.findElement(By.name("Ecom_Password")).sendKeys("")
    await driver.findElement(By.xpath('//*[@id="submitButton"]')).click()
    await driver.sleep("10000")
    const text =
    await driver.findElement(By.xpath('//*[@id="kt_app_header_wrapper"]/app-navbar/div[7]/app-user-inner/div[1]/div/div[2]/div[1]')).getText()
    if(text == "")
        console.log("Prueba exitosa")
    else
        console.log("Prueba fallida")
    driver.quit();
}

mitecLogin();