import PortFolioPage from "./pages/portfolio";
import AboutMe from "./pages/aboutMe";
import ContactMe from "./pages/contactMe";
import HomePage from "./pages/home";
import MainHeaderResponsive from "@/components/main-header/main-header-responsive";

export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  return (
    <header className="lg:overflow-y-auto lg:h-screen lg:flex flex-row lg:scroll-snap-type-y-mandatory">
      <HomePage className='hidden'/>      
      <PortFolioPage className='hidden'/>
      <AboutMe className='hidden'/>
      <ContactMe className='hidden'/>
      <MainHeaderResponsive/>
    </header>
);
}
