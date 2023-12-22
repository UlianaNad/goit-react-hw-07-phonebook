import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import { StyledUl } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { contactsData } from '../../redux/contactSlice';
import { searchContact } from '../../redux/filterSlice';

function ContactList() {
  const contacts = useSelector(contactsData);
  const filter = useSelector(searchContact);

  const searchWord = filter.filter.toLowerCase();

  const filteredData = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchWord);
  });

  return (
    <div>
      <h2>Contact list</h2>
      {filteredData.length !== 0 ? (
        <StyledUl>
          {filteredData.map(contact => (
            <ContactItem {...contact} key={contact.id} />
          ))}
        </StyledUl>
      ) : (
        <h3>You don`t have any contacts yet...</h3>
      )}
    </div>
  );
}

export default ContactList;
