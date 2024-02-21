import React from 'react';
import {Typography, TextField, Button} from '@mui/material';
import styles from './styles.module.css'
import {createNewConversation} from '@/lib/actions/creatingNewConversation';

export default function FormCreateConversation () {
    return (
        <div>
            <Typography 
                variant="h6" 
                fontWeight={700} 
                color="secondary"
                align="center"
                marginBlockEnd={3}
            >
                Create your own conversation and start to learn a new language
            </Typography>
            <form action={createNewConversation} className={styles.form} >
                <TextField
                    id="name"
                    label="Name"
                    name="name"
                    variant="outlined"
                    type="text"
                    size="small"
                    color="secondary"
                />
                <TextField
                    multiline
                    id="description"
                    label="Describe the person you want to talk to"
                    name="description"
                    variant="outlined"
                    type="text"
                    size="small"
                    color="secondary"
                />
                <TextField
                    id="language"
                    label="Write the language you want to practice"
                    name="language"
                    variant="outlined"
                    type="text"
                    size="small"
                    color="secondary"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    Create
                </Button>
            </form>
        </div>
    )
}