import { Hero } from "@/components/home/Hero";
import { CallToAction } from "@/components/home/CallToAction";
import { Box, Container } from "@mui/material";
import { Header } from "@/components/shared/Header";
import { ChatList } from "@/components/home/ChatList";
import styles from './page.module.css'

import { getUserSession } from "@/lib/getUserSession";

export default async function HomePage() {

  const user = await getUserSession()
  const Component = user.name ? LoggedPage : NotLoggedPage
  
  return (
    <>
      <Header />
      <Component />
    </>
  );
}




async function LoggedPage() {

  const user = await getUserSession()

  return (
    <ChatList />
  )
}

function NotLoggedPage() {
  return (
    <Container className={styles.rootLayout}>
        <Box className={styles.layout}>
          <Hero />
          <CallToAction />
        </Box>
      </Container>
  )
}
