import { NoLoggedHeader } from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <NoLoggedHeader />
        {children}
    </>
  );
}
