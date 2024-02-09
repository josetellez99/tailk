import { Hero } from "@/components/home/Hero";
import { CallToAction } from "@/components/home/CallToAction";
import { Box, Container } from "@mui/material";
import { Header } from "@/components/shared/Header";
import styles from './page.module.css'

import { LogoutButton } from "@/components/home/LogoutButton";
import { getUserData } from "@/lib/getUserSession";

export default async function HomePage() {

  const session = await getUserData()
  
  return (
    <>
      <Header />
      <Container className={styles.rootLayout}>
        <Box className={styles.layout}>
          <Hero />
          <CallToAction />
          { session.name ? (
            <>
              <p>Hellooo</p>
              <p>{session?.name}</p>
              <LogoutButton />
            </>
          ): null}
        </Box>
      </Container>
    </>
  );
}
