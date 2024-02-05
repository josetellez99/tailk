import { TextField } from "@mui/material";
import{ Button } from "@mui/material";
import {Typography} from "@mui/material";
import styles from './styles.module.css'
import Link from 'next/link'

export function RegisterForm() {
    return (
        <>
            <Typography 
                variant="body2" 
                fontWeight={700} 
                color="secondary" 
                align="center"
                marginBlockEnd={3}
            >
                Please enter the next information to create your account
            </Typography>
            <form className={styles.form}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    color="secondary"
                />
                <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
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
                <TextField
                    id="password"
                    label="Confirm password"
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
                    Register
                </Button>
                <Typography
                    variant="body2"
                    color="secondary"
                    align="center"
                    marginBlockEnd={3}
                    >
                    Alredy have an account? <Link className={styles.registerLink} href="/login">sign in here</Link>
                </Typography>
            </form>
        </>
    )
}