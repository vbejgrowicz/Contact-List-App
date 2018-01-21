import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../actions/settingActions';

class NewContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.onInput = this.onInput.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
  }

  onInput(e) {
    const { value } = e.target;
    this.props.filterContacts(value);
  }

  cancelSearch() {
    this.props.filterContacts('SHOW ALL');
  }

  render() {
    return (
      <form className="search" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name="search"
          onChange={this.onInput}
          placeholder="Search by Contact Name"
        />
        <button type="reset" onClick={this.cancelSearch}>Cancel</button>
      </form>
    );
  }
}

NewContactItem.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    filterContacts: (post, category, user, postCount) => {
      dispatch(setFilter(post, category, user, postCount));
    },
  }
);
export default connect(null, mapDispatchToProps)(NewContactItem);
