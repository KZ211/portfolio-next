'use client';

import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import BlogPage from './pages/blog';

export default function Home() {

  return <>
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <BlogPage/>
  </>
}
