import { Hero } from "@/components/home/Hero";
import { CallToAction } from "@/components/home/CallToAction";
import { Box } from "@mui/material";
import { Header } from "@/components/shared/Header";
import styles from './page.module.css'

export default function HomePage() {
    
  return (
    <>
      <Header />
      <Box className={styles.layout}>
        <Hero />
        <CallToAction />
      </Box>
    </>
  );
}
