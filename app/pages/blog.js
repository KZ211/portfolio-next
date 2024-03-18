import React, { useEffect, useState } from 'react';
import {Element} from 'react-scroll';
import Card from '../components/card/card';

export default function BlogPage(){
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const threshold = 100;
      const threshold1 = 200;
      const threshold2 = 300;

      setIsVisible(scrollY > threshold);
      setIsVisible1(scrollY > threshold1);
      setIsVisible2(scrollY > threshold2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return <Element name='blog' id='blog' className='bg-[--color5]'>
        <div id='about' className="mx-2 max-w-[90rem] py-14 md:mx-[10%] bg-[--color5]">
    <div className='font-monserrat pb-10 zIndex'>
        <div className="mt-5 self-center grid-row-span-1 row-start-1 row-end-1">
        <div className="container overflow-hidden">
        <h2 className={`mb-4 font-monserrat text-ms uppercase font-medium my-0 animate-showText transition-all ease duration-300 delay-100 text-[--color1] ${
            isVisible ? 'animate-showText' : 'opacity-0'
          } transition-all duration-500`}>blog</h2>
        </div>
        </div>
      <div className='flex flex-row scroll-container overflow-x-auto snap-x'>
        <div className='whitespace-nowrap snap-center'>
          <Card titulo='University' subTitulo='Start of classes' texto='I&apos;m starting my second semester at the University of 3 de Febrero.' texto2='I enrolled in one course to have more availability to work on my professional profile as a programmer.'/>
        </div>
        <div className='whitespace-nowrap snap-center'>
          <Card titulo='Programming' subTitulo='New Project' texto='Since experience is very important, I continue to create projects to challenge my knowledge.' texto2='With these projects, my professional development grows alongside my ability to solve problems.'/>
        </div>
        <div className='whitespace-nowrap snap-center'>
          <Card titulo='Permanence' subTitulo='Learning something new' texto='I recently finished a course on React.js and Next.js in which we worked on a project.' texto2='In the project, I overcame challenges and goals set by Professor Maximilian Schwarzmüller.'/>
        </div>
        <div className='whitespace-nowrap snap-center'>
          <Card titulo='University' subTitulo='Determination' texto='I&apos;m very happy since I&apos;m close to obtaining my diploma in software, granted by UNTREF.' texto2='By passing the remaining 2 subjects at my university, I would be granted the same.'/>
        </div>
      </div>
    </div>
    </div>
    </Element>
}