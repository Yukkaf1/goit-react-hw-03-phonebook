import { Component } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Simpson', number: '49-12-512' },
      { id: nanoid(), name: 'Adams', number: '49-10-000' },
      { id: nanoid(), name: 'Hoops', number: '49-00-000' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const savedNamesList = contacts.map(contact => contact.name);

    if (savedNamesList.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = currId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== currId),
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const contactFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section headTitle="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.handleChange} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
