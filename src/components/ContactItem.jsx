import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ contact }) {
  return (
    <div>
      <ul>
        {contact.firstName}
      </ul>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
