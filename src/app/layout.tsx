import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';

import { Container } from '@mui/material';
import { Box } from '@mui/material';


import type { Viewport } from 'next'
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import './globals.css';


export const metadata: Metadata = {
  title: "Tailk",
  description: "Improve your english with an AI",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <ThemeProvider theme={theme}>
            <Container
              maxWidth={false}
              disableGutters
              component={'main'}
            >
              <Box
                height={'100vh'}
                bgcolor={'primary.main'}
              >
                {children}
              </Box>
            </Container>
          </ThemeProvider>
        </body>
    </html>
  );
}
