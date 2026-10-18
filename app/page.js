import HomePage from './sections/home';
import ExperiencePage from './sections/experience';
import ProjectsPage from './sections/projects';
import StackPage from './sections/stack';
import AboutPage from './sections/about';
import BlogPage from './sections/blog';
import ContactPage from './sections/contact';
import Footer from './sections/footer';

export default function Home() {
  return (
    <>
      <main id="content">
        <HomePage />
        <ExperiencePage />
        <ProjectsPage />
        <StackPage />
        <AboutPage />
        <BlogPage />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
