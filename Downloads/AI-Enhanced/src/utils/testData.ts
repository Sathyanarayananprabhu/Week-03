import { faker } from '@faker-js/faker';

export const TestData = {
  randomEmail: () => faker.internet.email(),
  randomUsername: () => faker.internet.userName(),
  randomPassword: () => faker.internet.password(),
  randomName: () => faker.person.fullName(),
}; 