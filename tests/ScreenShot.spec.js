const { test, expect } = require('@playwright/test');

test('Screen shot ', async ({ page }) => {

    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('Landing.png');

});
