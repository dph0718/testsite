import React, { Component } from 'react';
import './contactPage.css';
import ContactCard from '../../components/ContactCard'


class ContactPage extends Component {

  state = {

  };

  render() {

    return (
      <div className="contact-page">
          <ContactCard />
      </div>
    );
  }
}

export default ContactPage;
