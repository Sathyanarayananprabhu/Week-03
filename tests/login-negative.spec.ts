import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { CONFIG } from '../environment/env';
import { invalidUser } from '../src/fixtures/userFixture';

test('Login fails with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalidUser.username, invalidUser.password);
  await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
});

test('Login fails with empty credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  const errors = page.locator('.oxd-input-field-error-message');
  await expect(errors.nth(0)).toHaveText('Required');
  await expect(errors.nth(1)).toHaveText('Required');
});

test('Login fails with only username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalidUser.username, '');
  const errors = page.locator('.oxd-input-field-error-message');
  await expect(errors.first()).toHaveText('Required');
});

test('Login fails with only password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', invalidUser.password);
  const errors = page.locator('.oxd-input-field-error-message');
  await expect(errors.first()).toHaveText('Required');
});

test('Login fails with whitespace credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('   ', '   ');
  await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
}); 