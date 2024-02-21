import { getUserSession } from "@/lib/getUserSession";
import { getUserConversations } from "@/services/db/conversations";

export async function GET () {

    const userData = await getUserSession()

    if(userData) {
        const userConversations = await getUserConversations(userData.id!)
        return Response.json(userConversations);
    }
}