const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test.describe('Dashboard Tests', () => {
    let loginPage;
    let dashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('verify inventory page is loaded', async () => {
        const isVisible = await dashboardPage.isInventoryVisible();
        expect(isVisible).toBeTruthy();
    });

    test('add product to cart', async () => {
        await dashboardPage.addProductToCart(0);
        const cartCount = await dashboardPage.getCartItemCount();
        expect(cartCount).toBe('1');
    });

    test('sort products by price low to high', async () => {
        await dashboardPage.sortProducts('lohi');
        const products = await dashboardPage.getProductTitles();
        expect(products.length).toBeGreaterThan(0);
    });

    test('logout functionality', async ({ page }) => {
        await dashboardPage.logout();
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/');
    });
}); 