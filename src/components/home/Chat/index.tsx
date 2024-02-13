import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import styles from './styles.module.css'

interface ChatProps {
    name: string;
    lastMessage: string;
    avatar: string;

}

export function Chat ({name, lastMessage, avatar} : ChatProps) {
    return (
        <ListItem className={styles.listItem}>
                <ListItemAvatar>
                    <Avatar 
                        className={styles.avatar}
                        src={avatar}
                    >
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    className={styles.listItemText}
                    primary={name}
                    primaryTypographyProps={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 500,
                    }}
                    secondary={lastMessage}
                    secondaryTypographyProps={{
                        color: '#517DA2', //theme secondaru main
                        fontSize: 16,
                    }}
                />
            </ListItem>
    )
}