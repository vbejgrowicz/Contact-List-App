import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSort } from '../actions/settingActions';

function Sort({ sortBy, updateSort }) {
  function onPress(e) {
    updateSort(e.target.value);
  }
  return (
    <div>
      <button value="FIRST" onClick={onPress}>First Name</button>
      <button value="LAST" onClick={onPress}>Last Name</button>
    </div>
  );
}

Sort.propTypes = {
  sortBy: PropTypes.string.isRequired,
  updateSort: PropTypes.func.isRequired,
};

function mapStateToProps({ settings }) {
  return { sortBy: settings.sortBy };
}

const mapDispatchToProps = dispatch => (
  {
    updateSort: (sortBy) => {
      dispatch(setSort(sortBy));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
