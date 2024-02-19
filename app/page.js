import PortFolioPage from "./pages/portfolio";
import AboutMe from "./pages/aboutMe";
import ContactMe from "./pages/contactMe";
import HomePage from "./pages/home";

export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  return (
    <header className="overflow-y-auto h-screen flex flex-col scroll-snap-type-y-mandatory">
      <HomePage/>      
      <PortFolioPage/>
      <AboutMe/>
      <ContactMe/>
    </header>
);
}
