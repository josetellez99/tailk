import  { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

const theme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    '@font-face': [roboto],
                },
            },
        },
    },
});