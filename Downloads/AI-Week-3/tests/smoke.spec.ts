import { test, expect } from '@playwright/test';

test('smoke: always passes', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toContain('Example');
}); 