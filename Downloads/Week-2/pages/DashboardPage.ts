import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.locator('#submit');
  }

  async isLoggedIn() {
    await expect(this.logoutButton).toHaveText('Log out');
  }
} 