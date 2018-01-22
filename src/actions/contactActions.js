export function addContact(contact) {
  return { type: 'ADD_CONTACT', contact };
}

export function removeContact(contact) {
  return { type: 'REMOVE_CONTACT', contact };
}
