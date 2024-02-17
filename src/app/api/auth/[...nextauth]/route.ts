import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/services/db/database'
import bcrypt from 'bcrypt'

export const authOptions = {
    providers : [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'email', placeholder: 'jsmith@gmail.com' },
                password: { label: 'Password', type: 'password', placeholder: '********'}
            },        
            async authorize(credentials, req) {

                try {
                    const userFound = await db.user.findUnique({
                        where: {
                            email: credentials?.email
                        }
                    })
    
                    if(userFound?.password && credentials?.password) {
                        const validPassword =  await bcrypt.compare(credentials.password, userFound.password)
                        if(!validPassword) return null
                    }
    
                    return {
                        image: userFound?.id,
                        name: userFound?.username,
                        email: userFound?.email,
                    }
                } catch (error) {
                    return null
                }

            }
        })
    ],
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}