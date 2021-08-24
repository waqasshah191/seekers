import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
import useStyles from './Styles';

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations()
  const styles = useStyles();
  return (
    <ListGroup variant="flush" className={styles.sidebarList}>
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
