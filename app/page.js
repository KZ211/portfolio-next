'use client';

import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import BlogPage from './pages/blog';
import PerfilImage from "./components/card/perfilImage";

export default function Home() {

  return <>
      <HomePage/>
      <AboutPage/>
      <BlogPage/>
      <ProjectsPage/>
      <PerfilImage/>
  </>
}
