import { chatCompletions } from '@/services/openai/chatCompletions';
import { NextRequest } from 'next/server';

export async function POST (request : NextRequest) {

    try {
        const requestObject = await request.json()
        const [userLastMessage, assistantLastMessage] = await chatCompletions(requestObject.messages, requestObject.conversationId)
        return Response.json([userLastMessage, assistantLastMessage])
    } catch (error) {
        console.log('ERROR', error)
    }
}