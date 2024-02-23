'use client'

import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendIcon from '@mui/icons-material/Send';
import styles from './styles.module.css'

interface ConversationDownBarProps {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ConversationDownBar({setMessages, setShouldFetch}: ConversationDownBarProps) {

    const[localMessage, setLocalMessage] = React.useState<string>('')
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        setLocalMessage(text)
    }
    
    const handleClick = async () => {
        setMessages((prev) => [...prev, {content: localMessage, role: 'user'}])
        setLocalMessage('')
        setShouldFetch(true);
    };
        

    return (
        <>
            <section className={styles.downBar}>
                {/* <EmojiEmotionsOutlinedIcon className={styles.emoji} /> */}
                <textarea onChange={handleChange} value={localMessage} className={styles.input} />
                <SendIcon onClick={handleClick} color='secondary' className={styles.send} />
            </section>
        </>
    )
}

