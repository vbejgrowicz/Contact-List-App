import { connect } from 'react-redux';
import ContactList from './ContactList';
import reduxUtils from '../../libs/Redux-Utility-Functions';

const getSortedContacts = (contacts, settings) => {
  function byFirst(a, b) {
    const x = a.name.first.toLowerCase();
    const y = b.name.first.toLowerCase();
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    }
    return 0;
  }
  function byLast(a, b) {
    const x = a.name.last.toLowerCase();
    const y = b.name.last.toLowerCase();
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    }
    return 0;
  }

  switch (settings.sortBy) {
    case 'FIRST':
      return reduxUtils.sort(contacts, byFirst);
    case 'LAST':
      return reduxUtils.sort(contacts, byLast);
    default:
      return contacts;
  }
};

const getFilteredContacts = (contacts, settings) => {
  if (settings.visible !== 'SHOW ALL') {
    const filterBy = (value) => {
      const lowerFirst = value.name.first.toLowerCase();
      const lowerLast = value.name.last.toLowerCase();
      const lowerFilter = settings.visible.toLowerCase();
      const firstIncludes = lowerFirst.indexOf(lowerFilter) >= 0;
      const lastIncludes = lowerLast.indexOf(lowerFilter) >= 0;
      return firstIncludes || lastIncludes;
    };
    const filteredList = reduxUtils.filter(contacts, filterBy);
    return getSortedContacts(filteredList, settings);
  }
  return getSortedContacts(contacts, settings);
};


const mapStateToProps = state => (
  {
    contacts: getFilteredContacts(state.contacts.list, state.settings),
  }
);

const ContactListContainer = connect(mapStateToProps, null)(ContactList);

export default ContactListContainer;
