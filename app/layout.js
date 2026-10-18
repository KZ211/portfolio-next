import { Montserrat } from 'next/font/google';
import '../globals.css';
import NavBar from './components/navbar/navbar';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });

// Runs in <head> before paint: enables the entrance animations and applies a
// saved dark theme so it never flashes light first.
const bootScript = `document.documentElement.classList.add('js');try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

const description =
  'Alexis Jares, AI engineer and full-stack developer in Buenos Aires. Three years building web and mobile apps with React, Next.js, Angular and Node.';

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Alexis Jares · AI engineer & full-stack developer',
  description,
  openGraph: {
    title: 'Alexis Jares · AI engineer & full-stack developer',
    description,
    images: ['/images/whiteboard.jpg'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="overflow-x-hidden bg-paper font-sans text-ink">
        <ThemeProvider>
          <LanguageProvider>
            <NavBar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
