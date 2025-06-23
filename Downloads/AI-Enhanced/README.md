# Playwright POM Project

This project is a UI test automation framework using Playwright and the Page Object Model (POM) design pattern.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Folder Structure

- `src/pages/` - Page Object Model classes
- `src/env.ts` - Environment configuration
- `tests/` - Test files

## Running Tests

```bash
npm test
```

## Recording Tests

Use the Playwright extension or run:
```bash
npx playwright codegen <url>
``` 