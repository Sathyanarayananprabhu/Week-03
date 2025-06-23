import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

test('Login using POM and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.enterUsername('admin');
  await loginPage.enterPassword('Admin@123');
  await loginPage.clickLogin();
  await dashboardPage.isLoggedIn();
}); 