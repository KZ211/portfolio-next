'use client';

import React, { useEffect, useState } from 'react';
import {Element} from 'react-scroll';
import Project from '../components/card/project';
import ProjectInvert from '../components/card/projectInvert';

export default function ProjectsPage(){

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la posición del scroll
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Define el umbral de visibilidad (ajústalo según sea necesario)
      const threshold = 800;
      const threshold1 = 1300;
      const threshold2 = 1800;

      // Activa la visibilidad cuando el usuario ha hecho scroll más allá del umbral
      setIsVisible(scrollY > threshold);
      setIsVisible1(scrollY > threshold1);
      setIsVisible2(scrollY > threshold2);
    };

    // Agrega un evento de escucha al scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const fotoEjemplo = 'https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg';
    const project1 = 'https://drive.google.com/uc?id=1IrqIKek3r-ZKcefbLeFlseXWGD7k5Lre';
    const project1_1 = '';

    return <Element name='projects' id='projects' className='bg-[--color3]'>
        <header className="mx-2 bg-[--color3] pt-4
                           md:mx-[10%] text-[--color2]">
            <main className="grid grid-cols-1 grid-rows-[150px_1100px_1000px_900px_1000px] font-montserrat justify-items-center
                            min-[894px]:grid-rows-[100px_600px_600px_600px_600px] min-[894px]:py-10">
                <header className="container row-start-1 row-end-1
                                    min-[894px]:mx-0 min-[894px]:justify-self-start">
                    <h1 className={`mt-14 min-[894px]:mt-4 font-montserrat font-medium uppercase text-min-[894px] animate-showText transition-all ease duration-300 delay-100 ${
            isVisible ? 'animate-showText' : 'opacity-0'
          } transition-all duration-500`}>Projects</h1>
                </header>
                <article className={`container w-full row-start-2 row-end-2 mb-5 animate-showText transition-all ease duration-300 delay-100
                                    min-[894px]:justify-center min-[894px]:items-center min-[894px]:justify-self-start min-[894px]:w-full min-[894px]:h-full ${
                                        isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <Project title='Nextlevel' 
                             subtitle='Next Project' 
                             description='I have carried out this project throughout a course on Udemy about React.js and Next.js. Within the course, I learned many resources, both for design, logic, and ways to structure code or modularize components to improve their subsequent readability.'
                             imageProp='https://drive.google.com/uc?id=1aIKZ6hO7v5erlkMOwPpP6-BmhZTQ7Fpg'
                             gitHub={true}
                             vercel={true}
                             pageIcon={false}
                             linkGithub='https://github.com/KZ211/next-level-food'
                             linkVercel='https://next-level-food-eight.vercel.app/'
                             linkPage=''
                             />
                </article>
                <article className={`container justify-end row-start-3 row-end-3 my-4 animate-showText transition-all ease duration-300 delay-100
                                    min-[894px]:justify-center min-[894px]:items-center min-[894px]:justify-self-end min-[894px]:w-full min-[894px]:h-full ${
                                        isVisible1 ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <ProjectInvert title='4Pilares' 
                             subtitle='Google pages' 
                             description='This page was the result of a collaboration with a small volleyball club in my area to which I belonged. They needed a "Letter of Introduction" to share their passion for teaching and the love these people feel for this beautiful sport. When looking for a proposal that does not involve a paid monthly fee, the idea of ​​developing the page on "Google Pages" arose.'
                             imageProp='https://drive.google.com/uc?id=1ah4niKWodBk0nSUBvl2xPyoz3rSbafre'
                             gitHub={false}
                             vercel={false}
                             pageIcon={true}
                             linkGithub=''
                             linkVercel=''
                             linkPage='https://sites.google.com/view/4pilaresvoley/home'
                             />
                </article>
                <article className={`container row-start-4 row-end-4 my-4 animate-showText transition-all ease duration-300 delay-100
                                    min-[894px]:justify-center min-[894px]:items-center min-[894px]:justify-self-start ${
                                        isVisible2 ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <Project title='coldental' 
                             subtitle='Wordpress' 
                             description='My first project developed in WordPress. The design of this page was very intuitive thanks to the theme used, "Avada Theme", which had the "Avada Live" option. This allowed me to modify the different boxes, texts, sizes, and colors, along with many other different options. These features allowed me to carry out my task for this dentistry located in CABA.'
                             imageProp='https://drive.google.com/uc?id=1qzLcVLPKWsTsXdsjqQFN2l81uivhV0Me'
                             gitHub={false}
                             vercel={false}
                             pageIcon={true}
                             linkGithub=''
                             linkVercel=''
                             linkPage='https://coldental.stevearagonsite.com/'
                             />
                </article>
                <article className={`container justify-end row-start-5 row-end-5 my-4 animate-showText transition-all ease duration-300 delay-100
                                    min-[894px]:justify-center min-[894px]:items-center min-[894px]:justify-self-end min-[894px]:w-full min-[894px]:h-full ${
                                        isVisible1 ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <ProjectInvert title='project1' 
                             subtitle='Web Dev' 
                             description='Esse eu duis incididunt amet. Eu do officia laboris ut. Ad exercitation eiusmod sit ut officia ut ea velit exercitation. Anim esse et minim amet aute laboris ullamco laborum excepteur. Ut consequat elit pariatur voluptate consequat.'
                             imageProp='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg'
                             gitHub={true}
                             vercel={true}
                             pageIcon={true}
                             linkGithub='google.com'
                             linkVercel=''
                             linkPage=''
                             />
                </article>
            </main>
        </header>
    </Element>
}