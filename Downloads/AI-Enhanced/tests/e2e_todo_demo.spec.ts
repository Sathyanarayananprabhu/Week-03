import { test, expect } from '@playwright/test';
import { TodoPage } from '../src/pages/TodoPage';
import { TestData } from '../src/utils/testData';

// Grouping ToDo demo tests
test.describe('Playwright Demo ToDo App', () => {
  test('Add and toggle a todo with random string', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    const randomTodo = TestData.randomString(15); // 15-char random string
    console.log('Adding todo:', randomTodo);
    await todoPage.addTodo(randomTodo);
    await todoPage.assertTodoExists(randomTodo);
    console.log('Todo added and verified.');
    await todoPage.toggleAll();
    // Assert all todos are marked as completed
    const items = page.locator('.todo-list li');
    await expect(items.first()).toHaveClass(/completed/);
    console.log('All todos toggled as completed.');
  });

  test('Generate random email and password', async () => {
    const email = TestData.randomEmail();
    const password = TestData.randomPassword();
    console.log('Random email:', email);
    console.log('Random password:', password);
    expect(email).toMatch(/@/);
    expect(password.length).toBeGreaterThanOrEqual(8);
  });
}); 