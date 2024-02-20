import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export const metadata = {
  title: "Home",
  description: "Pagina Principal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className=' lg:overflow-hidden'>
        <MainHeaderBackground/>
        <MainHeader className='hidden lg:block'/>
        {children}
        </body>
    </html>
  );
}
