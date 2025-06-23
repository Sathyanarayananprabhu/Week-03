import { test, expect } from '@playwright/test';
import { TodoPage } from '../src/pages/TodoPage';
import { TestData } from '../src/utils/testData';

// Grouping ToDo demo tests
test.describe('Playwright Demo ToDo App', () => {
  test('Add and toggle a todo', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    const todoText = TestData.randomName();
    console.log('Adding todo:', todoText);
    await todoPage.addTodo(todoText);
    await todoPage.assertTodoExists(todoText);
    console.log('Todo added and verified.');
    await todoPage.toggleAll();
    // Assert all todos are marked as completed
    const items = page.locator('.todo-list li');
    await expect(items.first()).toHaveClass(/completed/);
    console.log('All todos toggled as completed.');
  });
}); 