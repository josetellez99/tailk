import { AppBar } from "@mui/material"
import { Typography } from "@mui/material"
import { Toolbar } from "@mui/material"
import { HamburgerMenu } from "./HamburgerMenu"
import { SidebarHamburgerMenu } from "./SidebarHamburgerMenu"
import styles from './styles.module.css'

import { getUserSession } from "@/lib/getUserSession"
import Link from 'next/link'


export async function Header () {

    const user = await getUserSession()
    const Component = user.name ? LoggedHeader : NotLoggedHeader

    return (
        <Component />
    )
}


function LoggedHeader () {

    return (
        <>
            <AppBar 
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


function NotLoggedHeader () {

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