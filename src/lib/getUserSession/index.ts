import { getServerSession } from "next-auth";


export async function getUserSession () {
    
    const session = await getServerSession();

    const userData = {
        name: session?.user?.name,
        email: session?.user?.email,
        id: session?.user?.image,
    }

    return userData
}