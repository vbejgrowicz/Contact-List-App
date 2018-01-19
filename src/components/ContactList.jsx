import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ContactList({ contacts }) {
  return (
    <div>
      <ul>
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
