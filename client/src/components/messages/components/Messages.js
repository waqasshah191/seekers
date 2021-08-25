import React, { useContext } from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../../../../src/components';
import { AppContext } from '../../../context/AppProvider';
import { Container } from '@material-ui/core';

export function Messages() {
  const { selectedConversation } = useConversations();
  const { userId } = useContext(AppContext)

  return (
    <Container>
      <div className="d-flex" style={{ height: 'calc(100vh - 100px)', paddingBlock: 16 }}>
        <Sidebar id={userId} />
        {selectedConversation && <OpenConversation />}
      </div>
    </Container>
  )
}


export default withAuthenticationRequired(Messages, {
  onRedirecting: () => <Loading />,
});
