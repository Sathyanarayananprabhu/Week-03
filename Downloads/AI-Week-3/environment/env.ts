export const ENV = 'staging';
export const CONFIG = {
  staging: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    username: 'Admin',
    password: 'admin123',
  },
  production: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    username: 'Admin',
    password: 'admin123',
  }
}[ENV]; 