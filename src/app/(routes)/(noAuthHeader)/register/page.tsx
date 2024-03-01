import { RegisterForm } from "@/components/register/RegisterForm";
import { Box, Container } from "@mui/material";
import { FitLayout } from "@/components/shared/FitLayout";
import styles from './page.module.css'

export default function RegisterPage() {
    return (
        <FitLayout>
            <Container disableGutters className={styles.rootLayout}>
                <Box className={styles.layout}>
                    <RegisterForm />
                </Box>
            </Container>
        </FitLayout>
    );
}