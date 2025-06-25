const { test, expect } = require('@playwright/test');
const LoginPage = require('../Week-3/pages/LoginPage');
const DashboardPage = require('../Week-3/pages/DashboardPage');

test('E2E: login, check inventory, logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

  const dashboardPage = new DashboardPage(page);
  // Check inventory is visible
  await expect(await dashboardPage.isInventoryVisible()).toBeTruthy();

  // Logout
  await dashboardPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/');
}); 