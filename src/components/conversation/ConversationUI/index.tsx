'use client'

import React from 'react';
import { ConversationDownBar } from "@/components/conversation/ConversationDownBar";
import { Box } from "@mui/material";
import { MessageList } from "@/components/conversation/MessageList";
import styles from './styles.module.css'

interface ConversationUIProps {
  conversationMessages: Message[]
  conversationId: string;
}

export function ConversationUI({ conversationId, conversationMessages } : ConversationUIProps) {

  const [messages, setMessages] = React.useState<Message[]>(conversationMessages)
  const [shouldFetch, setShouldFetch] = React.useState(false);

  React.useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    const fetchResponseModel = async () => {
      const res = await fetch('http://localhost:3000/api/chatCompletions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages,
          conversationId: conversationId,
        }),
      });

    const [lastUserMessage, lastAsistantResponse] = await res.json();

    setMessages((prev) => [
      ...prev.slice(0, prev.length - 1), // Todos los elementos excepto el último
      lastUserMessage,
      lastAsistantResponse,
    ]);

    setShouldFetch(false);
  };

  fetchResponseModel();
}, [shouldFetch]); // Dependencia en 'shouldFetch', no en 'messages'

  return (
    <>
      <Box className={styles.chatContainer}>
        <MessageList
          messages={messages}
        />
      </Box>
      <ConversationDownBar
        setMessages={setMessages}
        setShouldFetch={setShouldFetch}
      />
    </>
  );
}