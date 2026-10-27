const {test,expect} = require('@playwright/test');
test ('verify page tite',async({page})=>{

  await page.goto("https://www.google.com");
  const labelname = await page.locator("svg.ESTs9d").getAttribute("aria-label");
  console.log(labelname);

})