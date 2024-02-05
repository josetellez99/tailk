import { TextField } from "@mui/material";
import{ Button } from "@mui/material";
import {Typography} from "@mui/material";
import styles from './styles.module.css'
import Link from 'next/link'

export function LoginForm() {
    return (
            <form className={styles.form}>
                <TextField
                    id="username"
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    color="secondary"
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    size="small"
                    color="secondary"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    Login
                </Button>
                <Typography
                    variant="body2"
                    color="secondary"
                    align="center"
                    marginBlockEnd={3}
                >
                    Don't have an account? <Link className={styles.registerLink} href="/register">Register</Link>
                </Typography>
            </form>
    )
}