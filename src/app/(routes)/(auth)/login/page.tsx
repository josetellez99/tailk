import { LoginForm } from "@/components/login/LoginForm";
import { Box } from "@mui/material";
import styles from './page.module.css'

export default function LoginPage() {
    return (
        <>
            <Box className={styles.layout}>
                <LoginForm />
            </Box>
        </>
    );
}