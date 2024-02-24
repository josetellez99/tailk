import {ListItem} from '@mui/material';
import {ListItemAvatar} from '@mui/material';
import {Avatar} from '@mui/material';
import {ListItemText} from '@mui/material';
import Link from 'next/link';
import styles from './styles.module.css'

interface ChatProps {
    name: string;
    lastMessage: string;
    avatar: string;
    conversationId: string;
}

export function Chat ({name, lastMessage, avatar, conversationId} : ChatProps) {
    return (
        <Link href={`/conversation/${conversationId}?name=${name}&picture=${avatar}`}>
            <ListItem className={styles.listItem}>
                <ListItemAvatar>
                    <Avatar 
                        src={avatar}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 500,
                    }}
                    secondary={lastMessage}
                    secondaryTypographyProps={{
                        color: '#00488f', //theme secondaru main
                        fontSize: 15,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                />
            </ListItem>
        </Link>
    )
}

// here there is inline styles because I can't access to the secondaryText component directly through css classes