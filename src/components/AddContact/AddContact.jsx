import React, { useState } from 'react';
import {
  StyledButtonSubmit,
  StyledForm,
  StyledInput,
} from './AddContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';
import { contactsData } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsData);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const notify = () => toast('Name exists in your list!');

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.contacts.some(contact => contact.name === name);

    if (isExist) {
      notify();
    } else {
      const newContact = { id: nanoid(), name, number };
      dispatch(addContact(newContact));
    }

    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
          placeholder="New name"
        />
        <StyledInput
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          required
          placeholder="Phone number"
        />

        <StyledButtonSubmit>Add new contact</StyledButtonSubmit>
      </StyledForm>
    </div>
  );
};
