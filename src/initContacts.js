import faker from 'faker';

faker.seed(123);

function createContacts(number) {
  const contactList = [];
  for (let i = 0; i < number; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = `${firstName.charAt(0)}${lastName}`;
    const email = `${username.toLowerCase()}@${faker.internet.domainName()}`;
    const phone = faker.phone.phoneNumberFormat();
    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
    };
    const contact = {
      firstName,
      lastName,
      email,
      phone,
      address,
    };
    contactList.push(contact);
  }
  return contactList;
}

const initContacts = {
  contacts: createContacts(20),
};

export default initContacts;
