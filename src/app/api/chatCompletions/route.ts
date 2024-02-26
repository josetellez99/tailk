import { chatCompletions } from '@/services/openai/chatCompletions';
import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST (request : NextRequest) {

    try {
        const requestObject = await request.json()
        console.log('requestObject', requestObject)
        const [userLastMessage, assistantLastMessage] = await chatCompletions(requestObject.messages, requestObject.conversationId)
        revalidateTag('get-user-messages')
        return Response.json([userLastMessage, assistantLastMessage])
    } catch (error) {
        console.log('ERROR', error)
    }
}