'use client'

import React from 'react';
import axios from 'axios';
import { ConversationDownBar } from "@/components/conversation/ConversationDownBar";
import { Box } from "@mui/material";
import { MessageList } from "@/components/conversation/MessageList";
import styles from './styles.module.css'

interface ConversationUIProps {
  conversationMessages: Message[]
  conversationId: string;
}

export function ConversationUI({ conversationId, conversationMessages } : ConversationUIProps) {

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [messages, setMessages] = React.useState<Message[]>(conversationMessages)
  const [shouldFetch, setShouldFetch] = React.useState(false);

React.useEffect(() => {
  if (!shouldFetch) {
    return;
  }
  const fetchResponseModel = async () => {
    const res = await axios.post(`${process.env.SERVER_URL}/api/chatCompletions`, {
      messages: messages,
      conversationId: conversationId,
    });

    const [lastUserMessage, lastAsistantResponse] = res.data;

    setMessages((prev) => [
      ...prev.slice(0, prev.length - 1), // Todos los elementos excepto el último
      lastUserMessage,
      lastAsistantResponse,
    ]);

    setShouldFetch(false);
  };

  fetchResponseModel();
}, [shouldFetch]);

  return (
    <>
      <Box
        component={'div'}
        className={styles.chatContainer}
        ref={containerRef}  
      >
        <MessageList
          messages={messages}
        />
      </Box>
      <ConversationDownBar
        setMessages={setMessages}
        setShouldFetch={setShouldFetch}
        containerRef={containerRef}
      />
    </>
  );
}