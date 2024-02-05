import { RegisterForm } from "@/components/register/RegisterForm";
import { Box, Typography } from "@mui/material";
import styles from './page.module.css'

export default function RegisterPage() {
    return (
        <>
        <Box className={styles.layout}>
            <RegisterForm />
        </Box>
        </>
    );
}