'use client'

import { TextField } from "@mui/material";
import{ Button } from "@mui/material";
import {Typography} from "@mui/material";
import styles from './styles.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import React from "react";

export function LoginForm() {

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const emailLogin = formData.get('email');
        const passwordLogin = formData.get('password');

        const signinRes = await signIn('credentials', {
            email: emailLogin,
            password: passwordLogin,
            redirect: false,
        });

        if (signinRes?.ok) {
            router.push('/');
        }
    };

    return (
        <>
                <Typography 
                    variant="body2" 
                    fontWeight={700} 
                    color="secondary"
                    align="center"
                    marginBlockEnd={3}
                >
                    Welcome back, please enter your email and password and improve your english
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form} >
                    <TextField
                        id="email"
                        label="Email"
                        name="email"
                        variant="outlined"
                        type="email"
                        size="small"
                        color="secondary"
                        />
                    <TextField
                        id="password"
                        label="Password"
                        name="password"
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
        </>
    )
}