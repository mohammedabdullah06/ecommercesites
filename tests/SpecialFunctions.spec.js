//npx playwright test tests/SpecialFunctions.spec.js --project=chromium --headed

//npx playwright test --ui

//npx playwright test tests/SpecialFunctions.spec.js --project=chromium --debug



const{test,expect} = require('@playwright/test');
test('sp functions',async({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.locator("[name='name']").first().fill("Abdullah");
await page.locator("[name='email']").fill("abdullah23@gamil.com");
await page.getByPlaceholder('Password').fill('Abdu123');
await page.getByLabel('Check me out if you Love IceCreams!').click();
await page.getByLabel('Gender').selectOption('Male');
await page.getByLabel('Employed').check();
await page.locator("[value='Submit']").click();








})