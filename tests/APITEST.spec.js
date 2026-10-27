//npx playwright test tests/APITEST.spec.js --project=chromium --headed

const { test,expect,request } = require('@playwright/test');
const LoginPayload = {userEmail:"mdabdullah12@gmail.com",userPassword:"Abdullah@123"};
let tokenValue;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
  
    // const loginResponse = await apiContext.post(
    //   "https://rahulshettyacademy.com/api/ecom/auth/login",
    //   { data: LoginPayload }
    // );
  
    // expect(loginResponse.ok()).toBeTruthy();
  
    // const loginResponseJson = await loginResponse.json(); // <-- await added here
    // tokenValue = loginResponseJson.token;
    // console.log(tokenValue);
  });

test('demo site', async ({ page }) => {

  page.addInitScript(value =>{

    window.localStorage.setItem('token',value);
  },tokenValue);

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.pause();
    
//     //Registration page
//     await page.locator('.text-reset').click();
    
//     //Case 1 : Print all the header names
//     //const headingname = await page.locator('div.form-group label').first().textContent();
//     const headingname = await page.locator('div.form-group label').allTextContents();
//     console.log("Tokenvalue",headingname);
    
    
//     await page.locator('input#firstName').fill('Abdullah');
//     await page.locator('input#lastName').fill('Mohammed');
//     const Emailfield = await page.locator('input#userEmail');
//     await Emailfield.fill(Email);
//     //console.log(Emailfield.inputValue());
//     await page.locator('input#userMobile').fill('5845965256');
//     const dropdown = page.locator('select.custom-select');
//     await dropdown.selectOption("Engineer");
    
//     //Case 2 : Dropdown value comparition
//     //console.log( await expect(dropdown).toHaveText('Engineer'));
//     await page.locator('[value="Male"]').click();
    
//     //Case 3 : radio button checked or not
//     console.log(await page.locator('[value="Male"]').first().isChecked());
//     await page.locator('input#userPassword').fill(Password);
//     await page.locator('input#confirmPassword').fill(Password);
//     await page.locator('[type="checkbox"]').click();
    
//     //Case 4 : Check box checked or not 
//     console.log("Checkbox",await page.locator('[type="checkbox"]').isChecked());
//     await page.locator('input#login').click();
    
//     //goto login page
//     await page.locator('a.text-reset').click();
//     await page.locator('input#userEmail').fill(Email);
//     await page.locator('input#userPassword').fill(Password);
//     await page.locator('input#login').click();

}); 