import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.fill('#userName', 'admin');
  await page.fill('#password', 'Admin@123');
  await page.click('#login');
  await expect(page.locator('#submit')).toHaveText('Log out');
}); 