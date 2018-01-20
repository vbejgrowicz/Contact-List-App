import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ContactItem({ contact, sortBy }) {
  const { name, phone, email } = contact;
  return (
    <li>
      <div className="name">
        {sortBy === 'LAST' ? (
          `${name.last}, ${name.first}`
        ) : (
          `${name.first} ${name.last}`
        )}
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
  sortBy: PropTypes.string.isRequired,
};

function mapStateToProps({ settings }) {
  return { sortBy: settings.sortBy };
}

export default connect(mapStateToProps, null)(ContactItem);
