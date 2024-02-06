"use server"

import database from "@/services/db/database"

export async function registerUser(formData: FormData) {

    try {
        const userData = {
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
            passwordConfirm: formData.get('passwordConfirm')
        }
    
        if (userData.password !== userData.passwordConfirm) {
            return new Error('Passwords do not match')
        }
    
        const newUser = await database.user.create({
            data: {
                email: userData.email as string,
                username: userData.username as string,
                password: userData.password as string
            }
        })
        console.log('New user:', newUser)

    } catch (error) {
        return new Error('Error creating user')
    }
}