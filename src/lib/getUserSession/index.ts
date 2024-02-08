import { getServerSession } from "next-auth";


export async function getUserData () {
  const session = await getServerSession();

  console.log('session')
  console.log(session)

  const userData = {
    name: session?.user?.name,
    email: session?.user?.email,
    id: session?.user?.image,
  }

    return userData

}