//npx playwright test tests/DemoSite.spec.js --project=chromium --headed


const { test,expect } = require('@playwright/test');
test('demo site', async ({ page }) => {

const Email = 'mdabdullah12@gmail.com';
const Password = 'Abdullah@123';


await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

//Registration page
await page.locator('.text-reset').click();

//Case 1 : Print all the header names
//const headingname = await page.locator('div.form-group label').first().textContent();
const headingname = await page.locator('div.form-group label').allTextContents();
console.log(headingname);


await page.locator('input#firstName').fill('Abdullah');
await page.locator('input#lastName').fill('Mohammed');
const Emailfield = await page.locator('input#userEmail');
await Emailfield.fill(Email);
//console.log(Emailfield.inputValue());
await page.locator('input#userMobile').fill('5845965256');
const dropdown = page.locator('select.custom-select');
await dropdown.selectOption("Engineer");

//Case 2 : Dropdown value comparition
//console.log( await expect(dropdown).toHaveText('Engineer'));
await page.locator('[value="Male"]').click();

//Case 3 : radio button checked or not
console.log(await page.locator('[value="Male"]').first().isChecked());
await page.locator('input#userPassword').fill(Password);
await page.locator('input#confirmPassword').fill(Password);
await page.locator('[type="checkbox"]').click();

//Case 4 : Check box checked or not 
console.log("Checkbox",await page.locator('[type="checkbox"]').isChecked());
await page.locator('input#login').click();

//goto login page
await page.locator('a.text-reset').click();
await page.locator('input#userEmail').fill(Email);
await page.locator('input#userPassword').fill(Password);
await page.locator('input#login').click();

//await page.pause();


//Case 5 : Switch to products page and get the exact needed product and add to cart
//searched product name
const productname = 'iphone 13 pro';
//get all the product
await page.locator('.card-body b').first().textContent();
const products = await page.locator('.card-body');
const Productlist = await page.locator('.card-body b').allTextContents();
console.log("Productnames",Productlist);

//count of all the product
const productcount = await products.count();
for(let i=0;i<productcount;i++){
 if (await products.nth(i).locator('b').textContent()=== productname){
    //Add to cart  
    await products.nth(i).locator("text= Add To Cart").click();
    break;
 }

}



await page.locator('[routerlink*="cart"]').click();


const bool =  await page.locator("text=iphone 13 pro").isVisible();
//expect(bool).toBeTruthy();




//case 6 : Check out and fill details


await page.locator(".totalRow [type='button']").click();

const creditcard = await page.locator(".input.txt.text-validated").first();
creditcard.clear();
creditcard.fill('8657 8796 7686 5423');
const expireddaterop = await page.locator('.input.ddl').first()
expireddaterop.selectOption("03");
const expiremondrop = await page.locator('.input.ddl').last()
expiremondrop.selectOption("29");
await page.locator("[type='text']").nth(1).fill('8542');
await page.locator("[type='text']").nth(2).fill('abdullah');
await page.locator("[type='text']").nth(3).fill('8542');
await page.locator("[type='submit']").click();
//

//Case 7 : Place order and get the order id

const shippingEmail = await page.locator(".user__name.mt-5 [type='text']").first().textContent();

console.log("Shipping Info Email:", shippingEmail);

expect(shippingEmail).toBe(Email);

const country = page.getByPlaceholder('Select Country');

await country.click();
await country.pressSequentially("ind", { delay: 150 }) 
const Shipdropdown = page.locator(".ta-results");
await Shipdropdown.waitFor();
const optionsCount = await Shipdropdown.locator("button").count();
for (let i = 0; i < optionsCount; ++i) {
   const text = await Shipdropdown.locator("button").nth(i).textContent();
   if (text === " India") {
      await Shipdropdown.locator("button").nth(i).click();
      break;
   }
}

await page.locator(".btnn").click();
const thankutext = await page.locator(".hero-primary").textContent();
console.log("Thank u Texr",thankutext);
expect(thankutext).toBe(" Thankyou for the order. ");

//Get order ID

const OrderID = await page.locator(" .em-spacer-1 .ng-star-inserted").textContent();
console.log("Order ID",OrderID);












}); 
