import React from 'react';
import PropTypes from 'prop-types';
import reduxUtils from '../../libs/Redux-Utility-Functions';
import ContactItem from './ContactItem';
import SearchBar from './SearchBar';
import Sort from './Sort';
import EditContactModal from './EditContactModal';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      addModal: !this.state.addModal,
    });
  }

  render() {
    function renderContact(contact) {
      return (
        <ContactItem key={contact.id} contact={contact} />
      );
    }
    return (
      <div className="contact-list">
        <button className="add-btn" onClick={this.handleClick}>
          <i className="fa fa-plus-square" aria-hidden="true" /> Add Contact
        </button>
        {this.state.addModal && (
          <EditContactModal onClose={this.handleClick} type="add" />
        )}
        <div className="header">
          <Sort />
          <SearchBar />
        </div>
        <ul>
          {this.props.contacts.length > 0 ? (
              reduxUtils.map(this.props.contacts, renderContact)
          ) : (
            <div>No Contacts Found</div>
          )}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
