import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import reduxUtils from '../../libs/Redux-Utility-Functions';
import ContactItem from './ContactItem';

function ContactList({ contacts }) {
  function renderContact(contact) {
    return (
      <ContactItem key={contact.firstName} contact={contact} />
    );
  }
  return (
    <div>
      <ul>
        {reduxUtils.map(contacts, renderContact)}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

function mapStateToProps({ contacts }) {
  return { contacts };
}

export default connect(mapStateToProps, null)(ContactList);
