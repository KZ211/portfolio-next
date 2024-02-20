import "./globals.css";

export const metadata = {
  title: "Home",
  description: "Pagina Principal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className=' lg:overflow-hidden'>
        {children}
        </body>
    </html>
  );
}
