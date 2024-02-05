import { LoginForm } from "@/components/login/LoginForm";
import { Box, Typography } from "@mui/material";
import styles from './page.module.css'

export default function LoginPage() {
    return (
        <>
        <Box className={styles.layout}>
            <Typography 
                variant="body2" 
                fontWeight={700} 
                color="secondary" 
                align="center"
                marginBlockEnd={3}
            >
                Welcome back, please enter your email and password and improve your english
            </Typography>
            <LoginForm />
        </Box>
        </>
    );
}