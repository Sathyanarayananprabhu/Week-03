import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 2,
  timeout: 60000,
  testDir: './tests',
  use: {
    baseURL: 'https://demo.playwright.dev/todomvc',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'playwright-report/report.json' }],
    ['allure-playwright'],
  ],
}); 