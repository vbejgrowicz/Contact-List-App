import faker from 'faker';

faker.seed(123);

function createContacts(number) {
  const contactList = [];
  for (let i = 0; i < number; i += 1) {
    const name = {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
    };
    const phone = faker.phone.phoneNumberFormat();
    const username = `${name.first.charAt(0)}${name.last}`;
    const email = `${username.toLowerCase()}@${faker.internet.domainName()}`;
    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
    };
    const contact = {
      id: i,
      name,
      phone,
      email,
      address,
    };
    contactList.push(contact);
  }
  return contactList;
}

const initContacts = {
  contacts: {
    list: createContacts(50),
  },
};

export default initContacts;
