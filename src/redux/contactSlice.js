import { createSlice } from '@reduxjs/toolkit';


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);

      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      return state;
    },
  },
});

export const { addContact, deleteContact, checkExistingContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

export const contactsData = state => state.contacts.contacts;
