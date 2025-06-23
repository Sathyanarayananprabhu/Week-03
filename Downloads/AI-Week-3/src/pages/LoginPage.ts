import { Page, expect } from '@playwright/test';
import { LOGIN_LOCATORS } from './locator_constants';
import { CONFIG } from '../../environment/env';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${CONFIG.baseUrl}/auth/login`);
  }

  async login(username: string, password: string) {
    await this.page.fill(LOGIN_LOCATORS.username, username);
    await this.page.fill(LOGIN_LOCATORS.password, password);
    await this.page.click(LOGIN_LOCATORS.submit);
  }

  async assertLoginSuccess() {
    await expect(this.page.locator('.oxd-userdropdown-name')).toBeVisible();
  }
} 