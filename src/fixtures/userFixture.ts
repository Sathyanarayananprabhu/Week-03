import { faker } from '@faker-js/faker';

export const validUser = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
};

export const invalidUser = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
}; 