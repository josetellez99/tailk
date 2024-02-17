import { Hero } from "@/components/home/Hero";
import { CallToAction } from "@/components/home/CallToAction";
import { Box, Container } from "@mui/material";
import { LoggedHeader } from "@/components/shared/Header";
import { NoLoggedHeader } from "@/components/shared/Header";
import { ChatList } from "@/components/home/ChatList";
import styles from './page.module.css'

import { getUserSession } from "@/lib/getUserSession";

export default async function HomePage() {

  const user = await getUserSession()
  const Page = user.name ? LoggedPage : NotLoggedPage
  
  return (
      <Page />
  );
}




async function LoggedPage() {

  return (
    <>
      <LoggedHeader />
      <ChatList />
    </>
  )
}

function NotLoggedPage() {
  return (
    <>
      <NoLoggedHeader />
      <Container className={styles.rootLayout}>
        <Box className={styles.layout}>
          <Hero />
          <CallToAction />
        </Box>
      </Container>
    </>
  )
}
