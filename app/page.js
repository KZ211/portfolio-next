'use client';

import React from 'react';
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import BlogPage from './pages/blog';
import PerfilImage from "./components/card/perfilImage";
import ScrollListener from "./components/scrollListener/scrollListener";

export default function Home() {
  const checkVisibility = ScrollListener();
  const { isVisible, isVisible1, isVisible2, isVisible3, isVisible4, isVisible5, isVisible6, isVisible7 } = checkVisibility();
  return (
    <>
      <HomePage />
      <AboutPage isVisible={isVisible} isVisible2={isVisible1}/>
      <BlogPage isVisible={isVisible2}/>
      <ProjectsPage isVisible={isVisible3} isVisible1={isVisible4} isVisible2={isVisible5} isVisible3={isVisible6}/>
      <PerfilImage isVisible={isVisible7}/>
    </>
  );
}
