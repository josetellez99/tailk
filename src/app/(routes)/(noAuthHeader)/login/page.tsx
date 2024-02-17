import { LoginForm } from "@/components/login/LoginForm";
import { Box, Container } from "@mui/material";
import styles from './page.module.css'

export default function LoginPage() {
    return (
        <>
            <Container disableGutters className={styles.rootLayout}>
                <Box className={styles.layout}>
                    <LoginForm />
                </Box>
            </Container>
        </>
    );
}