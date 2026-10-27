//npx playwright test tests/Shopsite.spec.js --project=chromium --headed


const { test, expect } = require('@playwright/test');

test('Register page', async ({ page }) => {

await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('[class="btn1"]').click();
await page.locator("input#firstName").fill("Abdullah");
await page.locator("input#lastName").fill("Mohammed");
await page.locator("input#userEmail").fill("abdullah23@gmail.com");
await page.locator("input#userMobile").fill('9857472536');
await page.locator("input#userPassword").fill('Abdullah@123');
await page.locator("input#confirmPassword").fill('Abdullah@123');
await page.locator("[type='checkbox']").click();
await page.locator("input#login").click();
console.log("Alert message : ", await page.locator("div#toast-container").textContent());

//await page.waitForTimeout(10000);

});

test('Login page', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("#userEmail").fill("abdullah23@gmail.com");
    await page.locator("#userPassword").fill("Abdullah@123");
    await page.locator('#login').click();   

    //wait method

    await page.waitForLoadState('networkidle');
    //console.log("productname",await page.locator("[style*='text-transform: uppercase']").first().textContent());
    console.log("Allproductname",await page.locator("[style*='text-transform: uppercase']").allTextContents());

});

