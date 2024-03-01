import { RegisterForm } from "@/components/register/RegisterForm";
import { Box, Container } from "@mui/material";
import styles from './page.module.css'

export default function RegisterPage() {
    return (
        <>
            <Container disableGutters className={styles.rootLayout}>
                <Box className={styles.layout}>
                    <RegisterForm />
                </Box>
            </Container>
        </>
    );
}