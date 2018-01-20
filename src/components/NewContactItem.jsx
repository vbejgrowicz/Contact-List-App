import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import reduxUtils from '../../libs/Redux-Utility-Functions';
class NewContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      phone: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
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
      zip,
    } = this.state;
    const newContact = {
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
        zip,
      },
    };
  }

  renderInput(item) {
    return (
      <label key={item} htmlFor={item}>
        {item.charAt(0).toUpperCase() + item.slice(1, item.length).toLowerCase()}
        <input type="text" name={item} onChange={this.onInput} />
      </label>
    );
  }

  render() {
    const inputs = reduxUtils.keys(this.state);
    return (
      <div>
        {reduxUtils.map(inputs, this.renderInput)}
        <input type="submit" value="Submit" onClick={this.submitContact} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
  }
);
export default connect(null, mapDispatchToProps)(NewContactItem);
