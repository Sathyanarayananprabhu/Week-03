import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../../environment/env';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(ENV.username, ENV.password);
    await use(page);
  },
});

export { expect } from '@playwright/test'; 