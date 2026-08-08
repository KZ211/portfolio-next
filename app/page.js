'use client';

import React from 'react';
import AboutPage from "./sections/about";
import HomePage from "./sections/home";
import ProjectsPage from "./sections/projects";
import BlogPage from './sections/blog';
import ProfileImage from "./components/card/profileImage";
import ScrollListener from "./components/scrollListener/scrollListener";

export default function Home() {
  const [isVisible, isVisible1, isVisible2, isVisible3, isVisible4, isVisible5, isVisible6, isVisible7] = ScrollListener();
  return (
    <>
      <HomePage isVisible={isVisible1}/>
      <AboutPage isVisible={isVisible} isVisible2={isVisible1}/>
      <BlogPage isVisible={isVisible2}/>
      <ProjectsPage isVisible={isVisible3} isVisible1={isVisible4} isVisible2={isVisible5} isVisible3={isVisible6}/>
      <ProfileImage isVisible={isVisible6}/>
    </>
  );
}
