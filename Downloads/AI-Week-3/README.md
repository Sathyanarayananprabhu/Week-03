# Playwright Smoke Test

This repo contains a minimal Playwright setup for a guaranteed green workflow.

## How to run

```sh
npm install
npx playwright test tests/smoke.spec.ts
```

# Playwright E2E Automation Framework

<!-- Trigger workflow: 2024-06-08 13:00 UTC -->

This repository contains an advanced Playwright automation framework using the Page Object Model (POM) design pattern, Allure reporting, and robust demo login tests against the OrangeHRM demo site.

## Features
- Page Object Model (POM) structure
- Allure and HTML reporting
- Robust positive and negative login tests
- Logger utility for test steps
- Ready for CI/CD with GitHub Actions

## Demo Site
- **URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- **Username:** `Admin`
- **Password:** `admin123`

## Project Structure
```
├── .github/workflows/playwright.yml   # GitHub Actions CI workflow
├── environment/env.ts                # Environment config
├── src/pages/                        # Page Objects and locators
├── src/utils/logger.ts               # Logger utility
├── tests/LoginTests/login.spec.ts     # E2E login tests
├── playwright.config.ts               # Playwright config (Allure + HTML reporters)
├── package.json, tsconfig.json        # Project configs
└── README.md
```

## Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sathyanarayananprabhu/Week-3.git
   cd Week-3
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running Tests
- **Run all tests:**
  ```sh
  npx playwright test
  ```
- **View HTML report:**
  ```sh
  npx playwright show-report
  ```
- **Generate and view Allure report:**
  ```sh
  npx allure generate ./allure-results --clean -o ./allure-report
  npx allure open ./allure-report
  ```

## CI/CD
- Tests run automatically on every push via GitHub Actions.
- Reports are uploaded as artifacts in the Actions tab.

## Customization
- Update selectors in `src/pages/locator_constants.ts` if your app changes.
- Add more Page Objects and tests in the `src/pages` and `tests` folders.

## References
- [Playwright Documentation](https://playwright.dev/)
- [Allure Reporter for Playwright](https://github.com/allure-framework/allure-js/tree/master/packages/allure-playwright)
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)

---

*Maintained by Sathyanarayananprabhu* 