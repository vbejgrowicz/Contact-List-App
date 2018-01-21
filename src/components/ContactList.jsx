import React from 'react';
import PropTypes from 'prop-types';
import reduxUtils from '../../libs/Redux-Utility-Functions';
import ContactItem from './ContactItem';
import SearchBar from './SearchBar';
import Sort from './Sort';


function ContactList({ contacts }) {
  function renderContact(contact) {
    return (
      <ContactItem key={contact.id} contact={contact} />
    );
  }
  return (
    <div className="contact-list">
      <div className="header">
        <Sort />
        <SearchBar />
      </div>
      <ul>
        {reduxUtils.map(contacts, renderContact)}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
