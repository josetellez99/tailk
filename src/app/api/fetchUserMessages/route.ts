import database from '@/services/db/database'
import { NextRequest } from 'next/server'

export async function POST (request: NextRequest) {

    try {
        const requestObject = await request.text()
        const messages = await database.message.findMany({
            where: {
                conversationId: requestObject
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