import React from 'react';
import {NewConversationHeader} from '@/components/shared/Header';
import { Box, Container } from '@mui/material';
import FormCreateConversation from '@/components/new-conversation/FormCreateConversation';
import styles from './page.module.css'

export default function NewConversationPage() {
    return (
        <>
            <NewConversationHeader />
            <Container
                className={styles.rootLayout}
                disableGutters
            >
                <Box className={styles.layout}>
                    <FormCreateConversation />
                </Box>
            </Container>
        </>
    )
}