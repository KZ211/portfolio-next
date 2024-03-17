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

    return <Element name='blog' id='blog'>
        <div id='about' className="mx-2 max-w-[90rem] mt-28 md:mx-[10%]">
    <div className='font-monserrat pb-10 zIndex'>
        <div className="mt-5 self-center grid-row-span-1 row-start-1 row-end-1">
        <div className="container overflow-hidden">
        <h2 className={`mb-4 font-monserrat text-ms uppercase font-medium my-0 animate-showText transition-all ease duration-300 delay-100 ${
            isVisible ? 'animate-showText' : 'opacity-0'
          } transition-all duration-500`}>blog</h2>
        </div>
        </div>
      <div className='flex flex-row scroll-container overflow-x-auto snap-x'>
        <div className='card-container whitespace-nowrap snap-start'>
          <Card titulo='universidad' subTitulo='Comienzo de clases' texto='Estoy comenzando la cursada de mi segundo cuatrimestre en la universidad de 3 de febrero.' texto2='Me inscribi a 1 materia para tener mayor disponibilidad para trabajar en mi perfil profesional como programador.'/>
        </div>
        <div className='card-container whitespace-nowrap snap-start'>
          <Card titulo='Progreso continuo' subTitulo='Aprendiendo algo nuevo' texto='Estoy comenzando la cursada de mi segundo cuatrimestre en la universidad de 3 de febrero.' texto2='Me inscribi a 1 materia para tener mayor disponibilidad para trabajar en mi perfil profesional como programador.'/>
        </div>
        <div className='card-container whitespace-nowrap snap-start'>
          <Card titulo='programing' subTitulo='Nuevo projecto' texto='Estoy comenzando la cursada de mi segundo cuatrimestre en la universidad de 3 de febrero.' texto2='Me inscribi a 1 materia para tener mayor disponibilidad para trabajar en mi perfil profesional como programador.'/>
        </div>
        <div className='card-container whitespace-nowrap snap-start'>
          <Card titulo='programing' subTitulo='Nuevo projecto' texto='Estoy comenzando la cursada de mi segundo cuatrimestre en la universidad de 3 de febrero.' texto2='Me inscribi a 1 materia para tener mayor disponibilidad para trabajar en mi perfil profesional como programador.'/>
        </div>
      </div>
    </div>
    </div>
    </Element>
}