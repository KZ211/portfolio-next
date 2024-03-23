import "./globals.css";
import NavBar from "./components/navbar/nav-var";

export const metadata = {
  title: "Alexis Jares",
  description: "This is mi profesional portfolio",
};

export default function RootLayout({ children }) {
  
  return (
      <html lang="en">
          <body className="bg-[--color1] ::-webkit-scrollbar ::-webkit-scrollbar-track ::-webkit-scrollbar-thumb .scrollbar-track .scrollbar-thumb">
            <NavBar/>
            {children}
          </body>
      </html>
  );
}
