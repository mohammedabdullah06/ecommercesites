const { test, expect } = require('@playwright/test');

test('alerts', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Register the dialog handler BEFORE the action that triggers it
  page.once('dialog', dialog => dialog.dismiss());

  await page.locator('#confirmbtn').click();
});