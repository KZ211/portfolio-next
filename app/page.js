import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";


export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  return <>
    <HomePage/>
    <AboutPage/>
    <ProjectsPage/>
  </>
}
