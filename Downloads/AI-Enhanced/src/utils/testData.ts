import { faker } from '@faker-js/faker';

export const TestData = {
  randomEmail: () => faker.internet.email(),
  randomPassword: () => faker.internet.password(),
  randomString: (len = 12) => faker.string.alphanumeric(len),
}; 