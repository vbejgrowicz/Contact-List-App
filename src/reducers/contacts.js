import reduxUtils from '../../libs/Redux-Utility-Functions';

const initalState = {
  list: [],
};

function addContactToList(list, contact) {
  const listIds = reduxUtils.map(list, each => each.id);
  const maxId = reduxUtils.max(listIds);
  const contactWithId = reduxUtils.merge({ id: maxId + 1 }, contact);

  return reduxUtils.take(list, list.length).concat(contactWithId);
}

const contacts = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        list: addContactToList(state.list, action.contact),
      };
    default:
      return state;
  }
};

export default contacts;
