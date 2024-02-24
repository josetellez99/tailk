import React, { useEffect, useRef } from 'react';
import { Message } from '@/components/conversation/Message';
import styles from './styles.module.css'

interface MessageListProps {
    messages: Message[];
}

export function MessageList ({ messages } : MessageListProps) {

    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'instant' });
        }
    }, [messages]);

    return (
        <div className={styles.messageList}>
            {messages.map((message) => (
                <Message
                    key={message.id}
                    message={message.content}
                    position={message.position}
                    role={message.role}
                />
            ))}
            <div ref={endOfMessagesRef} />
        </div>
    );
}