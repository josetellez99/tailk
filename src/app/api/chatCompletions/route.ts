import { chatCompletions } from '@/services/openai/chatCompletions';
import { NextRequest } from 'next/server';

export async function POST (request : NextRequest) {

    const requestObject = await request.json()
    const assistantMessage = await chatCompletions(requestObject.messages)

    return Response.json(assistantMessage)

}