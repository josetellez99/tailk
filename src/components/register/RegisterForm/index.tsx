import { TextField } from "@mui/material";
import{ Button } from "@mui/material";
import {Typography} from "@mui/material";
import styles from './styles.module.css'
import Link from 'next/link'

import { registerUser } from "@/lib/actions/registering";

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
            <form action={registerUser} className={styles.form}>
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    size="small"
                    color="secondary"
                    required
                />
                <TextField
                    label="Username"
                    name="username"
                    variant="outlined"
                    size="small"
                    color="secondary"
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    variant="outlined"
                    type="password"
                    size="small"
                    color="secondary"
                    required
                />
                <TextField
                    label="Confirm Password"
                    name="passwordConfirm"
                    variant="outlined"
                    type="password"
                    size="small"
                    color="secondary"
                    required
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
                    Alredy have an account? <Link className={styles.registerLink} href="/login">Sign in here</Link>
                </Typography>
            </form>
        </>
    )
}