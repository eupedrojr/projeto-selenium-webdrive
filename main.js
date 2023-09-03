import Drivers from "./drivers.js";
import { URL_BASE } from "./config.js";

driver = Drivers.getChromeDriver()

await driver.manage().setTimeouts({implicit: 500});

await driver.get('https://www.selenium.dev/selenium/web/web-form.html');


let title = await driver.getTitle();


console.log(title);