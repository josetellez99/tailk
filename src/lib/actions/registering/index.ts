"use server"

import { redirect } from "next/navigation"
import database from "@/services/db/database"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export async function registerUser(formData: FormData) {

    try {

        // Get the user data from the formData object
        const userData = {
            email: formData.get('email') as string,
            username: formData.get('username') as string,
            password: formData.get('password') as string,
            passwordConfirm: formData.get('passwordConfirm') as string
        }
    
        // Check if the passwords match
        if (userData.password !== userData.passwordConfirm) {
            return new Error('Passwords do not match')
        }

        // Check if the email already exists in the database, if it does, return an error
        const emailFound = await database.user.findUnique({
            where: {
                email: userData.email
            }
        })
    
        if (emailFound) {
            return NextResponse.json({ message: 'Email already exists' }) 
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(userData.password, 10)
    
        // Create the user
        const newUser = await database.user.create({
            data: {
                email: userData.email,
                username: userData.username,
                password: hashedPassword
            }
        })

        // Redirect to login page with a query parameter
        if(newUser) {
            redirect('/login?registered=true')
        }

    } catch (error) {
        // return new Error('Error creating user')
    }
}