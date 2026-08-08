import { Montserrat } from "next/font/google";
import "../globals.css";
import NavBar from "./components/navbar/navbar";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Alexis Jares",
  description: "This is mi profesional portfolio",
};

export default function RootLayout({ children }) {
  
  return (
      <html lang="en">
          <body className={`${montserrat.variable} bg-[--color1] overflow-x-hidden`}>
            <NavBar/>
            {children}
          </body>
      </html>
  );
}
