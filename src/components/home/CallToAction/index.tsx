import { ButtonGroup } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"
import Link from 'next/link'
import styles from './styles.module.css'

export function CallToAction() {
    return (
        <Box
            sx={{
                width: {
                    xs: "60%",
                    sm: "50%",
                    md: "40%",
                    lg: "30%",
                    xl: "20%",
                },
            }}
        >
        <ButtonGroup 
            color="secondary" 
            variant="contained" 
            size="large" 
            fullWidth={true}
        >
            <Button>
                <Link className={styles.buttonColor} href="/register">Register</Link>
            </Button>
            <Button>
                <Link className={styles.buttonColor} href="/login">Login</Link>
            </Button>
        </ButtonGroup>
    </Box>
    )
}