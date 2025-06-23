import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProfilePage } from '../../src/pages/ProfilePage';
import { Logger } from '../../src/utils/logger';
import { allure } from 'allure-playwright';

test.describe('Login E2E Advanced', () => {
  test('Valid user can log in and see profile', async ({ page }) => {
    allure.label({ name: 'priority', value: 'high' });
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    Logger.info('Navigating to login page');
    await loginPage.goto();
    Logger.info('Logging in with valid credentials');
    await loginPage.login('Admin', 'admin123');
    await loginPage.assertLoginSuccess();
    Logger.info('Fetching profile name');
    const profileName = await profilePage.getProfileName();
    expect(profileName && profileName.trim().length).toBeGreaterThan(0);
    Logger.info(`Profile name found: ${profileName}`);
    Logger.info('Test completed successfully');
  });

  test('Invalid user cannot log in', async ({ page }) => {
    allure.label({ name: 'priority', value: 'medium' });
    const loginPage = new LoginPage(page);
    Logger.info('Navigating to login page');
    await loginPage.goto();
    Logger.info('Attempting login with invalid credentials');
    await loginPage.login('invaliduser', 'invalidpass');
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
    Logger.info('Error message displayed as expected');
  });
}); 