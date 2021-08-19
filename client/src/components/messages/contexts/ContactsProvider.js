import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

import { useEffect } from 'react';

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  const getUsers = async () => {
    let response = await fetch('/user');
    let users = await response.json();

    // let prevContacts = [...contacts];
    let prevContacts = [];
    let userEmail = '';
    let userFirstName = '';
    let userLastName = '';
    let userName = '';

    console.log("users = ", users);

    for(let j=0; j<users.length; j++) {
      userEmail = users[j].email;
      userFirstName = users[j].firstName;
      userLastName = users[j].lastName;
      userName = userLastName ? userFirstName + ' ' + userLastName : userFirstName;
  
      prevContacts.push({id: userEmail, name: userName})
    }
  
    console.log("prevContacts = ", prevContacts)
  
    setContacts(prevContacts);
  };
  
  useEffect(() => {

      getUsers();

  }, []);

  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }]
    })
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
