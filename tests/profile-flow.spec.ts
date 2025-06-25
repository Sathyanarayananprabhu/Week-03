import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { ProfilePage } from '../src/pages/ProfilePage';
import { CONFIG } from '../environment/env';

test('Profile Name is visible after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(CONFIG.username, CONFIG.password);

  const profilePage = new ProfilePage(page);
  const profileName = await profilePage.getProfileName();
  expect(profileName).toBeTruthy();
}); 