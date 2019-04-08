import React from 'react';
import ContactForm from './ContactForm';

class ContactPage extends React.Component {
    onSubmit = data => {
        console.log('message has been sent', data);
    };

    render() {
        return <ContactForm onSubmit={this.onSubmit} />;
    }
}

export default ContactPage;
