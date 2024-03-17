import "./globals.css";
import NavBar from "./components/navbar/nav-var";

export const metadata = {
  title: "Home",
  description: "Pagina Principal",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className="bg-gray-50 ::-webkit-scrollbar ::-webkit-scrollbar-track ::-webkit-scrollbar-thumb .scrollbar-track .scrollbar-thumb">
            <NavBar/>
            {children}
          </body>
      </html>
  );
}
