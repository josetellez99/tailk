import Box from '@mui/material/Box';
import {List} from '@mui/material';
import { Chat } from '@/components/home/Chat';

import styles from './styles.module.css'

export function ChatList() {

return (
    <Box className={styles.box} >
        <List 
            disablePadding 
            className={styles.list} 
            dense={true}
        >
            <Chat 
                name={'Juanito alcachofas'}
                lastMessage={'Es muy interesante ese tema aunque la verdad no lo manejo ni conozco del todo'}
                avatar={'https://via.placeholder.com/300'}
            />
        </List>
    </Box>
);}