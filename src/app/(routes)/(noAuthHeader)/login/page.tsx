import { LoginForm } from "@/components/login/LoginForm";
import { Box, Container } from "@mui/material";
import styles from './page.module.css'
import { FitLayout } from "@/components/shared/FitLayout";

export default function LoginPage() {
    return (
        <FitLayout>
            <Container disableGutters className={styles.rootLayout}>
                <Box className={styles.layout}>
                    <LoginForm />
                </Box>
            </Container>
        </FitLayout>
    );
}