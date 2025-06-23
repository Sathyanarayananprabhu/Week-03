import { Page, expect } from '@playwright/test';
import { LOCATORS } from './locator_constants';

export class TodoPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todo: string) {
    await this.page.fill(LOCATORS.todo.todoInput, todo);
    await this.page.press(LOCATORS.todo.todoInput, 'Enter');
  }

  async assertTodoExists(todo: string) {
    await expect(this.page.locator(LOCATORS.todo.todoItems)).toContainText(todo);
  }

  async toggleAll() {
    await this.page.click(LOCATORS.todo.toggleAll);
  }
} 