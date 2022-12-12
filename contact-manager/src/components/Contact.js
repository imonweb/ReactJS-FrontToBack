import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired 
}

export default  Contact;