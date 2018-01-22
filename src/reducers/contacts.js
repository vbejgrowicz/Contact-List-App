import reduxUtils from '../../libs/Redux-Utility-Functions';

const initalState = {
  list: [],
};

function addContactToList(list, contact) {
  const listIds = reduxUtils.map(list, each => each.id);
  const maxId = reduxUtils.max(listIds);
  const contactWithId = reduxUtils.merge({ id: maxId + 1 }, contact);
  return list.concat(contactWithId);
}

function updateContactInList(list, contact) {
  const updatedList = reduxUtils.map(list, (el) => {
    if (el.id === contact.id) {
      return reduxUtils.merge(el, contact);
    }
    return el;
  });
  return updatedList;
}

const contacts = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        list: addContactToList(state.list, action.contact),
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        list: reduxUtils.remove(state.list, value => value.id === action.contact.id),
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        list: updateContactInList(state.list, action.contact),
      };
    default:
      return state;
  }
};

export default contacts;
