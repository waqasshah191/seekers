import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useContacts } from './messages/contexts/ContactsProvider';
import { useConversations } from './messages/contexts/ConversationsProvider';


const useStyles = makeStyles({
  button: {
    fontSize: 17,
    borderRadius: 25,
    paddingBlock: 7,
    paddingInline: 30,
    display: 'block',
    minWidth: 'auto',
    marginBottom: 16,
    marginInline: 'auto',
    "& span": {
      marginLeft: 0,
    }
  },
});

const MessageButton = ({ id, data }) => {
  const { contacts = [] } = useContacts();
  const { createConversation, conversations } = useConversations()
  const styles = useStyles();
  const history = useHistory();
  const handleCreateMessage = () => {
    const conversation = conversations.find(i => i.recipients.length > 0 && i.recipients[0].id === id);


    if (!conversation) {
      createConversation([id])
    }

    setTimeout(() => {
      history.push('/messages');
    }, 500);
  }
  return (
    <Button className={styles.button} onClick={handleCreateMessage} variant='contained' color='secondary'>
      Message
    </Button>
  )
}

export default MessageButton;
