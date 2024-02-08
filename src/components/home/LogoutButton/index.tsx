'use client'

import { signOut } from "next-auth/react"

export function LogoutButton () {

    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <button onClick={handleSignOut} >logout</button>
    )
}