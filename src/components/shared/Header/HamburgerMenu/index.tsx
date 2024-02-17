'use client'

import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import styles from './styles.module.css'
import { useOpenSideMenu } from '@/hooks/useOpenSideMenu/useOpenSideMenu';

export function HamburgerMenu () {

    const { toggle } = useOpenSideMenu((state) => ({
        toggle: state.toggle,
    }));

    const handleClick = () => {
        toggle()
    }

    return (

        <MenuIcon 
            color='primary'
            onClick={handleClick} 
            className={styles.icon} 
        />
    )
}