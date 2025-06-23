import { Page, expect } from '@playwright/test';

export class ProfilePage {
  static PROFILE_NAME = '.profile-name';

  constructor(private page: Page) {}

  async goto() {
    try {
      console.log('Navigating to profile page...');
      await this.page.goto('/profile');
    } catch (error) {
      console.error('Failed to navigate to profile page:', error);
      throw error;
    }
  }

  async assertProfileName(expectedName: string) {
    try {
      console.log(`Checking profile name is: ${expectedName}`);
      await expect(this.page.locator(ProfilePage.PROFILE_NAME)).toHaveText(expectedName);
    } catch (error) {
      console.error('Profile name assertion failed:', error);
      throw error;
    }
  }

  // Add profile page methods here
} 