import { Page } from '@playwright/test';
import { ENV } from '../env';

export class LoginPage {
  static USERNAME_INPUT = '#username';
  static PASSWORD_INPUT = '#password';
  static SUBMIT_BUTTON = 'button[type="submit"]';

  constructor(private page: Page) {}

  async goto() {
    try {
      console.log('Navigating to login page...');
      await this.page.goto(`${ENV.baseUrl}/login`);
    } catch (error) {
      console.error('Failed to navigate to login page:', error);
      throw error;
    }
  }

  async login(username: string, password: string) {
    try {
      console.log(`Logging in as ${username}...`);
      await this.page.fill(LoginPage.USERNAME_INPUT, username);
      await this.page.fill(LoginPage.PASSWORD_INPUT, password);
      await this.page.click(LoginPage.SUBMIT_BUTTON);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
} 