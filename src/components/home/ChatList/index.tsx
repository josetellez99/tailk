import Box from '@mui/material/Box';
import {List} from '@mui/material';
import { Chat } from '@/components/home/Chat';

import styles from './styles.module.css'

export async function ChatList() {

    const res = await fetch(`${process.env.SERVER_URL}/api/chatCompletions`, {
        next: {
            tags: ['get-user-conversations']
        }
    })
    const chats = await res.json()

    return (
        <Box className={styles.box} >
            <List 
                disablePadding 
                className={styles.list} 
                dense={true}
            >
                {chats.map((chat: Chat) => (
                    <Chat 
                        key={chat.id}
                        name={chat.name}
                        lastMessage={chat.lastMessage || `Send your first message to ${chat.name}`}
                        avatar={chat.avatar}
                        conversationId={chat.id}
                    />
                ))}
            </List>
        </Box>
    );
}