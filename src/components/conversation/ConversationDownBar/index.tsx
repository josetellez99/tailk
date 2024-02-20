'use client'

import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendIcon from '@mui/icons-material/Send';
import styles from './styles.module.css'

interface ConversationDownBarProps {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export function ConversationDownBar({setMessages}: ConversationDownBarProps) {

    const[localMessage, setLocalMessage] = React.useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setLocalMessage(text)
    }

    const handleClick = () => {
        setMessages((prev) => [...prev, {content: localMessage, role: 'user'}])
        setLocalMessage('')
    }


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