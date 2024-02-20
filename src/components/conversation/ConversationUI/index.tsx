'use client'

import React from 'react';
import { ConversationDownBar } from "@/components/conversation/ConversationDownBar";
import { Box } from "@mui/material";
import { MessageList } from "@/components/conversation/MessageList";
import { Suspense } from "react"; 
import styles from './styles.module.css'

const messages: Message[] = [
  {
      content: 'Hello, world!',
      position: 'First',
      role: 'user'
  },
  {
      content: 'How can I help you?',
      position: 'Middle',
      role: 'assistant'
  },
  {
      content: 'Thank you!',
      position: 'Last',
      role: 'user'
  }
];

interface ConversationUIProps {
  conversationId: string;
}


export function ConversationUI({ conversationId } : ConversationUIProps) {

  const [messages, setMessages] = React.useState<Message[]>([])

  console.log(messages)

  //const message = fetch(conversationID)

  return (
    <>
      <Box className={styles.chatContainer}>
          <Suspense fallback={<div>Loading...</div>}>
            <MessageList
              messages={messages}
            />
          </Suspense>
      </Box>
      <ConversationDownBar
        setMessages={setMessages}
      />
    </>
  );
}