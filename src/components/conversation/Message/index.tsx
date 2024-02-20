import React from 'react'
import styles from './styles.module.css'

interface MessageProps {
    message: string;
    role: 'user' | 'assistant';
    position?: 'First' | 'Middle' | 'Last';
}

export function Message ({ message, role } : MessageProps) {

    const Component = role === 'user' ? UserMessage : AssistantMessage;

    return (
        <Component
            message={message}
            role={role}
        />
    );
};



function UserMessage({ message } : MessageProps) {
    return (
        <div className={styles.userMessage}>
            <p>{message}</p>
        </div>
    );
}

function AssistantMessage({ message }: MessageProps) {
    return (
        <div className={styles.assistantMessage}>
            <p>{message}</p>
        </div>
    );
}