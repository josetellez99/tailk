import { getUserSession } from "@/lib/getUserSession";

import database from "@/services/db/database";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });



export async function chatCompletions( messages : Message[], conversationId: string) {

    // Get the conversation from the database to set the prompt
    const conversation = await database.conversation.findFirst({
        where: {
            id: conversationId
        }
    })

    if (!conversation) {
        throw new Error('Conversation not found')
    }

    // Get the user from the session to set the prompt and set the new messages in the database
    const user = await getUserSession();

    // openai api expect objects with just the role and the content. Our messages contain more information
    const sanitizedMessages = messages.map((message) => {
        return {role: message.role, content: message.content}
    })

    // We only want the last 10 messages to send to the openai api because of tokens prices per request
    const lastTenMessages = sanitizedMessages.slice(-10);

    // We make the request to the openai api
    const res = await openai.chat.completions.create({
        messages: [
            {role: 'system', content: 
                `You are a person named ${conversation.name} and you are having a chat like conversation witha  user named ${user.name}.
                Act as natural as possible like in a whatasapp conversation.You mainly provide short answers.
                Be a friendly person. and chat like a normal person.
                You act as a person like this: ${conversation.description} and all your response are exclusive in the next language: ${conversation.language}.
            `},
            ...lastTenMessages
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.5,
    })

    // This is the assitant response
    const assistantResponseMessage = res.choices[0].message

    // We save the assistant response in the database

    const userLastMessage = await database.message.create({
        data: {
            userId: user.id!,
            conversationId: conversationId,
            role: 'user',
            content: lastTenMessages[lastTenMessages.length - 1].content,
        }
    })

    const assistantLastMessage = await  database.message.create({
        data: {
            userId: user.id!,
            conversationId: conversationId,
            role: 'assistant',
            content: assistantResponseMessage.content!,
        }
    })

    // We set the assitantLastMessage as the last message in the conversation

    await database.conversation.update({
        where: {
            id: conversationId
        },
        data: {
            lastMessage: assistantLastMessage.content
        }
    })

    // we return the last user message and the last assistant message to set them in the state in the front end

    return [userLastMessage, assistantLastMessage]
}
