
import { test, expect } from '@playwright/test';


    async function registerUser(page) {

  // Step 1: Registration page open karo
  await page.goto('https://demowebshop.tricentis.com/register');

  // Step 2: Gender select karo
  await page.locator("//label[text()='Female']").check();
  await page.locator("//input[@id='FirstName']").fill('Test');
  await page.locator("//input[@id='LastName']").fill('User');
  await page.locator("//input[@id='Email']").fill('testuser@example.com');
  await page.locator("//input[@id='Password']").fill('TestPass123!');
  await page.locator("//input[@id='ConfirmPassword']").fill('TestPass123!');

}  

test('Register a new user XPath', async function ({ page })  {

    await registerUser(page);

});    
