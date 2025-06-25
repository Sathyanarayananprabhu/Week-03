import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { CONFIG } from '../environment/env';

test('Simple Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(CONFIG.username, CONFIG.password);
  await loginPage.assertLoginSuccess();
}); 