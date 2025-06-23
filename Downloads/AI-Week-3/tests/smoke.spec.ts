import { test, expect } from '@playwright/test';

test('smoke: saucedemo login page loads', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('input[data-test="username"]', { state: 'visible', timeout: 5000 });
  expect(await page.title()).toContain('Swag Labs');
  expect(await page.locator('input[data-test="username"]')).toHaveCount(1);
}); 