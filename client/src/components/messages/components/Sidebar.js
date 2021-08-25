import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import useStyles from './Styles';
import { useContacts } from './../contexts/ContactsProvider'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'
export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const { contacts } = useContacts();
  console.log(1, contacts)
  const styles = useStyles();
  return (
    <div className={styles.sidebar}>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className={styles.sidebarTabs}>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
      </Tab.Container>
    </div>
  )
}
