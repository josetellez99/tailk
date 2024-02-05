import { Box } from "@mui/material";
import { Header } from "@/components/shared/Header";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {

    return (
        <Box
            height={'100vh'}
            bgcolor={'primary.main'}
        >
            <Header />
            {children}
        </Box>
        );
}
