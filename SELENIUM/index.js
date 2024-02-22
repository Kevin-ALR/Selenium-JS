const {Builder, By, Key} = require('selenium-webdriver');

const doLogin =  async () => {
    const driver = new Builder().forBrowser('chrome').build();
    await driver.get("https://deapco.wixsite.com/la-ventana")
    await driver.sleep("2000")
    await driver.findElement(By.name("email")).sendKeys("admin@laventana.com")
    await driver.findElement(By.name("contraseña")).sendKeys("Admin123")
    await driver.findElement(By.xpath('//*[@id="comp-lmaqzdex"]/button')).click()
    await driver.sleep("5000");
    const text =
    await driver.findElement(By.xpath('//*[@id="comp-lmarybbv"]/h6/span')).getText()
    if(text == "Ubicaciones actuales")
        console.log("Prueba exitosa")
    else
        console.log("Prueba fallida")
    driver.quit();
}

doLogin();