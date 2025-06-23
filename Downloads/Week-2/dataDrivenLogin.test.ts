import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvData = fs.readFileSync('login_data.csv', 'utf-8');
const records: { username: string; password: string }[] = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
});

test.describe('Data-driven login tests', () => {
  for (const { username, password } of records) {
    test(`Login attempt with username: ${username}`, async ({ page }) => {
      await page.goto('https://demoqa.com/login');
      await page.fill('#userName', username);
      await page.fill('#password', password);
      await page.click('#login');
      const isLoggedIn = await page.locator('#submit').innerText() === 'Log out';
      if (isLoggedIn) {
        console.log(`SUCCESS: ${username}`);
      } else {
        console.log(`FAILURE: ${username}`);
      }
      expect(isLoggedIn).toBe(true);
    });
  }
}); 