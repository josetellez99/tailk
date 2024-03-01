import { AppBar } from "@mui/material"
import { Typography } from "@mui/material"
import { Toolbar } from "@mui/material"
import { HamburgerMenu } from "./HamburgerMenu"
import { SidebarHamburgerMenu } from "./SidebarHamburgerMenu"
import { Avatar } from '@mui/material';
import { Box } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './styles.module.css'

import Link from 'next/link'

interface ConversationHeaderProps {
    name: string;
    picture: string;
}

export function ConversationHeader ({name, picture} : ConversationHeaderProps) {
    return(
        <AppBar 
            color="secondary"
            className={styles.appBar}
        >
            <Toolbar>
                <Link href='/'>
                    <ArrowBackIcon 
                        color="primary" 
                        className={styles.backButton} 
                />
                </Link>
                <Box className={styles.avatarContainer}>
                    <Avatar src={picture} />
                    <Typography 
                        className={styles.name}
                        variant="body2"
                    >
                            {name}
                        </Typography>
                </Box>
                <Box flexGrow={1} />
                <PhoneIcon 
                    color="primary" 
                />
            </Toolbar>
        </AppBar>
)
}

export function NewConversationHeader () {

    return (
        <>
            <AppBar 
                color="secondary"
                className={styles.appBar}
            >
                <Toolbar>
                    <Link href='/'>
                        <ArrowBackIcon 
                            color="primary" 
                            className={styles.backButton} 
                    />
                    </Link>
                </Toolbar>
            </AppBar>
            <SidebarHamburgerMenu />
        </>
    )
}


export function LoggedHeader () {

    return (
        <>
            <AppBar 
                color="secondary"
                className={styles.appBar}
            >
                <Toolbar>
                    <HamburgerMenu />
                </Toolbar>
            </AppBar>
            <SidebarHamburgerMenu />
        </>
    )
}


export function NoLoggedHeader () {

    return (
        <>
            <AppBar 
                color="secondary"
                className={styles.appBar}
            >
                <Toolbar>
                    <Typography 
                        variant="button">
                            <Link className={styles.colorButton} href="/">Tailk</Link>
                        </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}