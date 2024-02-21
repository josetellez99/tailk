import React from 'react';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import styles from './styles.module.css'

export function NewConversationButton() {
    return (
        <Link href="/new-conversation">
            <Fab 
                size="large" 
                color="secondary" 
                aria-label="add"
                className={styles.button}
            >
                <AddIcon
                    fontSize="large"
                />
            </Fab>
        </Link>
    )
    
}