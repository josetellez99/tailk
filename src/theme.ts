// src/theme.ts
'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 16,
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
        },
    },
    palette: {
        primary: {
            main: '#FAFAFA',
            light: '#F7F7F7',
            dark: '#333333',
            contrastText: '#232323'
        },
        secondary: {
            main: "#517DA2",
            light: '#6C9FD2',
            dark: '#1B5A7D',
            contrastText: '#FAFAFA'
        },
        success: {
            main:'#4ECC5E',
            light: '#71EO79',
            dark: '#62AC55',
            contrastText: '#232323'
        },
        error: {
            main: '#E14D4D',
            light: '#F57F7F',
            dark: '#853D40',
            contrastText: '#FAFAFA'
        },
        warning: {
            main: '#F3C04B',
            light: '#f7d27c',
            dark: '#ad7c0a',
            contrastText: '#232323'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 800,
            lg: 1200,
            xl: 1536,
    }},
});