'use client'

import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendIcon from '@mui/icons-material/Send';
import styles from './styles.module.css'

export function ConversationDownBar() {

    const [message, setMessage] = React.useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setMessage(text)
    }


    return (
        <>
            <section className={styles.downBar}>
                <EmojiEmotionsOutlinedIcon className={styles.emoji} />
                <input type="text" onChange={handleChange} value={message} className={styles.input} />
                <SendIcon color='secondary' className={styles.send} />
            </section>
        </>
    )
}