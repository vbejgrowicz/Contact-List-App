import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from '../actions/contactActions';
import EditContactModal from './EditContactModal';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      editModal: !this.state.editModal,
    });
  }

  render() {
    const { sortBy, contact, deleteContact } = this.props;
    const { name, phone, email } = contact;
    return (
      <li>
        <i className="fa fa-minus-square remove-btn" aria-hidden="true" onClick={() => deleteContact(contact)} />
        <i className="fa fa-pencil-square edit-btn" aria-hidden="true" onClick={this.handleClick} />
        {this.state.editModal && (
          <EditContactModal contact={contact} onClose={this.handleClick} type="edit" />
        )}
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
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

function mapStateToProps({ settings }) {
  return { sortBy: settings.sortBy };
}

const mapDispatchToProps = dispatch => (
  {
    deleteContact: (contact) => {
      dispatch(removeContact(contact));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
