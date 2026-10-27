
//Run code
//npx playwright test tests/loginPage.spec.js --project=chromium --headed 


const { test, expect } = require('@playwright/test');

test('Search Playwright', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const username = page.locator('input#username');
  const signin = page.locator('input#signInBtn');
  const listoftext = page.locator(".card-body a");
  
  console.log("title", await page.title());

  await expect (page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

  await username.fill("rahulshettyacade");
  await page.locator('input#password').fill("Learning@830$3mK2");
  await signin.click();
  //await page.waitForTimeout(10000);
  
  //get the alert text

  console.log("alert text ",await page.locator("[style*='block']").textContent());

  //alert validation

  await expect(page.locator("[style*='block']")).toContainText('Incorrect');

  await username.fill("");
  await username.fill("rahulshettyacademy");
  await signin.click();
  
 //get the text in dashboard page 
  console.log("Mobile name ",await listoftext.first().textContent());

  //Get all text in dashboard
  const producsname = await listoftext.allTextContents();
  console.log(producsname)

});

test('Login page', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('input#username').fill("rahulshettyacade");
  await page.locator('input#password').fill("Learning@830$3mK2");
  await page.locator('.checkmark').last().click();
  await page.locator('button#okayBtn').click();
  await expect(page.locator('.checkmark').last()).toBeChecked();
  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption("Teacher");
  await page.locator('input#signInBtn').click();
  await page.pause();




}); 


test.only('get text', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/angularpractice/shop");
  const text = await page.locator('[class="navbar-brand"]').nth(1).textContent();
  console.log("Textcontent",text);
  const array = text.split(" ")[0]
  console.log ("inedexzero",array);







});