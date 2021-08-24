import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';
import useStyles from './Styles';

export default function Contacts() {
  const { contacts } = useContacts()
  const styles = useStyles();
  return (
    <ListGroup variant="flush" className={styles.sidebarList}>
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
