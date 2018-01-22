import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateContact, addContact } from '../actions/contactActions';
import reduxUtils from '../../libs/Redux-Utility-Functions';
import { createPlaceHolder, ignoreClose } from '../utils/helpers';

class EditContactModal extends React.Component {
  constructor(props) {
    super(props);
    const { contact } = this.props;
    this.state = {
      first: contact.name ? contact.name.first : '',
      last: contact.name ? contact.name.last : '',
      phone: contact.phone || '',
      email: contact.email || '',
      street: contact.address ? contact.address.street : '',
      city: contact.address ? contact.address.city : '',
      state: contact.address ? contact.address.state : '',
      zipcode: contact.address ? contact.address.zipcode : '',
    };
    this.submitContact = this.submitContact.bind(this);
    this.onInput = this.onInput.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  onInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  submitContact() {
    const {
      first,
      last,
      phone,
      email,
      street,
      city,
      state,
      zipcode,
    } = this.state;
    const contactData = {
      name: {
        first,
        last,
      },
      phone,
      email,
      address: {
        street,
        city,
        state,
        zipcode,
      },
    };
    if (this.props.contact.id) {
      contactData.id = this.props.contact.id;
      this.props.editContact(contactData);
    }
    this.props.onClose();
  }

  renderInput(item) {
    const placeholder = createPlaceHolder(item);
    return (
      <input
        key={item}
        className={item}
        type="text"
        name={item}
        value={this.state[item]}
        onChange={this.onInput}
        placeholder={placeholder}
      />
    );
  }

  render() {
    const inputs = reduxUtils.keys(this.state);
    const isDisabled = this.state.first.trim() === '' || this.state.last.trim() === '';
    return (
      <div className="window" onClick={this.props.onClose}>
        <div className="contact-form" onClick={ignoreClose}>
          {this.props.type === 'add' ?
            <div className="title">Add Contact</div>
          :
            <div className="title">Edit Contact</div>
          }
          {reduxUtils.map(inputs, this.renderInput)}
          <button onClick={this.props.onClose}>Cancel</button>
          {this.props.type === 'add' ?
            <button onClick={this.submitContact} disabled={isDisabled}>Submit</button>
          :
            <button onClick={this.submitContact} disabled={isDisabled}>Submit Changes</button>
          }
        </div>
      </div>
    );
  }
}

EditContactModal.propTypes = {
  contact: PropTypes.object,
  editContact: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

EditContactModal.defaultProps = {
  contact: {},
};

const mapDispatchToProps = dispatch => (
  {
    editContact: (contact) => {
      dispatch(updateContact(contact));
    },
  }
);

export default connect(null, mapDispatchToProps)(EditContactModal);
