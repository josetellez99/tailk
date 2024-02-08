import { Hero } from "@/components/home/Hero";
import { CallToAction } from "@/components/home/CallToAction";
import { Box } from "@mui/material";
import { Header } from "@/components/shared/Header";
import styles from './page.module.css'

import { LogoutButton } from "@/components/home/LogoutButton";
import { getUserData } from "@/lib/getUserSession";

export default async function HomePage() {

  const session = await getUserData()
  console.log(session)
  
  return (
    <>
      <Header />
      <Box className={styles.layout}>
        <Hero />
        <CallToAction />
        { session ? (
          <>
            <p>Logged in</p>
            <p>{session?.name}</p>
            <LogoutButton />
          </>
        ): <p>Not logged in</p>}
      </Box>
    </>
  );
}
