import database from '@/services/db/database'
import { NextRequest } from 'next/server'

export async function GET (request: NextRequest) {

    try {
        const requestObject = await request.json()
        const messages = await database.message.findMany({
            where: {
                conversationId: requestObject.conversationId
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        if(messages) {
            return Response.json(messages)
        }

    } catch (error) {

    }
}