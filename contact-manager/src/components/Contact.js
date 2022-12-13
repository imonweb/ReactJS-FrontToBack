import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  /*
  constructor() {
    super();
    this.state = {};

    this.onShowClick = this.onShowClick.bind(this);
  }
  */
  
  // onShowClick = e => {
    // console.log(e);
  // }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className='card card-body mb-3'>
        <h4>{name} <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down"></i></h4>

        {showContactInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>Email: {email}</li>
            <li className='list-group-item'>Phone: {phone}</li>
          </ul> 
        ) : null }
        
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