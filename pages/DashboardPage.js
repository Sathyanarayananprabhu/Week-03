class DashboardPage {
    constructor(page) {
        this.page = page;
        this.inventoryList = '.inventory_list';
        this.productTitle = '.inventory_item_name';
        this.addToCartButton = '.btn_inventory';
        this.cartBadge = '.shopping_cart_badge';
        this.sortDropdown = '[data-test="product_sort_container"]';
        this.menuButton = '#react-burger-menu-btn';
        this.logoutLink = '#logout_sidebar_link';
    }

    async isInventoryVisible() {
        return await this.page.isVisible(this.inventoryList);
    }

    async getProductTitles() {
        return await this.page.$$eval(this.productTitle, elements => 
            elements.map(el => el.textContent)
        );
    }

    async addProductToCart(index) {
        const addButtons = await this.page.$$(this.addToCartButton);
        await addButtons[index].click();
    }

    async getCartItemCount() {
        const badge = await this.page.$(this.cartBadge);
        return badge ? await badge.textContent() : '0';
    }

    async sortProducts(option) {
        await this.page.selectOption(this.sortDropdown, option);
    }

    async logout() {
        await this.page.click(this.menuButton);
        await this.page.click(this.logoutLink);
    }
}

module.exports = DashboardPage; 