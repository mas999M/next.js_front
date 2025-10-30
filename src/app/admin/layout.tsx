import { Outfit } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import { SidebarProvider } from '../context/SidebarContext';



const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>

  );
}
