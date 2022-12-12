import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
  state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'janedoe@gmail.com',
          phone: '555-666-6666'
        },
        {
          id: 3,
          name: 'Josh Doe',
          email: 'joshdoe@gmail.com',
          phone: '555-777-7777'
        }
      ]
    }
 

  render() {
    const { contacts } = this.state;

    return <div>{contacts.map(contact => (
      <Contact 
        key={contact.id}
        contact={contact} 
      />
    ))}</div>;
  }
}

export default Contacts;
