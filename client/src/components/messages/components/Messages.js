import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../..';



function Messages() {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

// export default Messages;

export default withAuthenticationRequired(Messages, {
  onRedirecting: () => <Loading />,
});
