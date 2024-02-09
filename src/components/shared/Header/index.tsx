import { AppBar, Typography, Box } from "@mui/material"
import { Toolbar } from "@mui/material"
import { getUserData } from "@/lib/getUserSession"
import styles from './styles.module.css'

import Link from 'next/link'

export function Header () {

    const session = getUserData()

    return (
        <>
            <AppBar 
                style={{backgroundColor: '#517DA2'}}
                position="static"
            >
                <Toolbar
                    color="primary.main"
                >
                    <Typography 
                        color='secondary.contrastText' 
                        variant="button">
                            <Link className={styles.colorButton} href="/">Tailk</Link>
                        </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}