'use server'

import { getUserSession } from "@/lib/getUserSession";
import database from "@/services/db/database";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function createNewConversation (formData: FormData) {

    const conversationData = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        language: formData.get('language') as string,
    }

    const user = await getUserSession()

    const newConverastion = await database.conversation.create({
        data: {
            name: conversationData.name,
            description: conversationData.description,
            language: conversationData.language,
            lastMessage: '',
            userId: user.id!,
        }
    })

    if(newConverastion) {
        revalidateTag('get-user-conversations')
        redirect(`/conversation/${newConverastion.id}?name=${newConverastion.name}&picture=${newConverastion.photo}`)
    }
}