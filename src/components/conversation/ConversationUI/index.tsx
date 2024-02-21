'use client'

import React from 'react';
import { ConversationDownBar } from "@/components/conversation/ConversationDownBar";
import { Box } from "@mui/material";
import { MessageList } from "@/components/conversation/MessageList";
import { Suspense } from "react";
import styles from './styles.module.css'

interface ConversationUIProps {
  conversationId: string;
}


export function ConversationUI({ conversationId } : ConversationUIProps) {

  

  const [messages, setMessages] = React.useState<Message[]>([])


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
        messages={messages}
        setMessages={setMessages}
      />
    </>
  );
}