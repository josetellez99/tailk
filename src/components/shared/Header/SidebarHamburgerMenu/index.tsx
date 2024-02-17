'use client'

import React from 'react';
import { Drawer } from '@mui/material';
import { Box } from '@mui/material';
import { useOpenSideMenu } from '@/hooks/useOpenSideMenu/useOpenSideMenu';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import styles from './styles.module.css'

import { signOut } from "next-auth/react"

export function SidebarHamburgerMenu() {
    
    const { open, toggle } = useOpenSideMenu((state) => ({
        open: state.open,
        toggle: state.toggle,
    }));

    const handleSignOut = async () => {
        await signOut()
    }

    return (
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={toggle}
                >
                    <Box className={styles.upBox}>
                        <Typography variant="h5">Settings</Typography>
                    </Box>
                    <Box className={styles.downBox}>
                        <Button
                            color='secondary'
                            variant="contained"
                            onClick={handleSignOut}
                        >
                            Logout
                        </Button>
                    </Box>
                </Drawer>
    );
}