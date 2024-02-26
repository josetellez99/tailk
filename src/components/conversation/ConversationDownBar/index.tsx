'use client'

import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendIcon from '@mui/icons-material/Send';
import styles from './styles.module.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

interface ConversationDownBarProps {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>;
    containerRef: React.RefObject<HTMLDivElement>;
}

export function ConversationDownBar({setMessages, setShouldFetch, containerRef}: ConversationDownBarProps) {

    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const[localMessage, setLocalMessage] = React.useState<string>('')

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = '24px';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setLocalMessage(e.target.value)
    }
    
    const handleClick = async () => {
        inputRef.current!.style.height = '24px';
        setMessages((prev) => [...prev, {content: localMessage, role: 'user'}])
        setLocalMessage('')
        setShouldFetch(true);
    };
        

    return (
        <>
            <section className={styles.downBar}>
                <EmojiEmotionsOutlinedIcon className={styles.emoji} />
                <textarea 
                    placeholder='Message' 
                    onChange={handleChange} 
                    value={localMessage} 
                    className={`${styles.input} ${roboto.className}`} 
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                />
                <SendIcon onClick={handleClick} color='secondary' className={styles.send} />
            </section>
        </>
    )
}

