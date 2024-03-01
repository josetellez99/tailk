import { ButtonGroup } from "@mui/material"
import { Button } from "@mui/material"
import Link from 'next/link'
import styles from './styles.module.css'

export function CallToAction() {
    return (
        <ButtonGroup 
            color="secondary" 
            variant="contained" 
            className={styles.buttonGroup}
        >
            <Button className={styles.button} size="large">
                <Link className={styles.buttonColor} href="/register">Register</Link>
            </Button>
            <Button className={styles.button} size="large">
                <Link className={styles.buttonColor} href="/login">Login</Link>
            </Button>
        </ButtonGroup>
    )
}