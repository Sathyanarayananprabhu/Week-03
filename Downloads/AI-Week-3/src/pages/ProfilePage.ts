import { Page, expect } from '@playwright/test';
import { PROFILE_LOCATORS } from './locator_constants';

export class ProfilePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/profile');
  }

  async getProfileName() {
    return this.page.textContent(PROFILE_LOCATORS.profileName);
  }

  async assertProfileName(expectedName: string) {
    await expect(this.page.locator(PROFILE_LOCATORS.profileName)).toHaveText(expectedName);
  }
} 