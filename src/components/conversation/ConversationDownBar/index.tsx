'use client'

import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendIcon from '@mui/icons-material/Send';
import styles from './styles.module.css'

interface ConversationDownBarProps {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    messages: Message[];
}

export function ConversationDownBar({messages, setMessages}: ConversationDownBarProps) {

    const[localMessage, setLocalMessage] = React.useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setLocalMessage(text)
    }

    const handleClick = async () => {
        setMessages((prev) => [...prev, {content: localMessage, role: 'user'}])
        setLocalMessage('')

        const res = await fetch('http://localhost:3000/api/chatCompletions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({messages: [...messages, {role: 'user', content: localMessage}]})
        });
    
        const data = await res.json();
        setMessages((prev) => [...prev, {content: data.content, role: data.role}])
    };


    return (
        <>
            <section className={styles.downBar}>
                {/* <EmojiEmotionsOutlinedIcon className={styles.emoji} /> */}
                <input type="text" onChange={handleChange} value={localMessage} className={styles.input} />
                <SendIcon onClick={handleClick} color='secondary' className={styles.send} />
            </section>
        </>
    )
}