import "./globals.css";
import NavBar from "./components/navbar/nav-var";

export const metadata = {
  title: "Home",
  description: "Pagina Principal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <NavBar/>
          {children}
        </body>
    </html>
  );
}
