const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
authenticatedpage : async({browser},use)=>
{
   const context =await browser.newContext();
   const page= await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('input#username').fill("rahulshettyacade");
  await page.locator('input#password').fill("Learning@830$3mK2");
  await page.locator('.checkmark').last().click();
  await page.locator('button#okayBtn').click();
  await use(page);

}

}
)