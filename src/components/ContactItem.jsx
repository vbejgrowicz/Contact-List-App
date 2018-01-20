import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ contact }) {
  const { name, phone, email } = contact;
  return (
    <li>
      <div className="name">
      </div>
      <div className="phone">
        {phone}
      </div>
      <div className="email">
        {email}
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
