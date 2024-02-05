import { AppBar, Typography, Box } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Button } from "@mui/material"

import Link from 'next/link'

export function Header () {
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
                            <Link style={{ color: '#fafafa'}} href="/">Tailk</Link>
                        </Typography>
                    <Box flexGrow={1} />
                    <Button>
                        <Link style={{ color: '#fafafa'}} href="/login">Login</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}