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
      <body className='overflow-hidden'>
        <MainHeaderBackground/>
        <MainHeader/>
        {children}
        </body>
    </html>
  );
}
