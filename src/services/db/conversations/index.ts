import database from "@/services/db/database";

export async function getUserConversations(userId: string) {
    try {
        const userConversations = await database.conversation.findMany({
            where: {
                userId: userId,
            }
        });
        return userConversations;
    } catch (error) {
        console.error("Error fetching user conversations:", error);
        throw error;
    }
}