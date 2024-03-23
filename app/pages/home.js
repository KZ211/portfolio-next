import React, { useEffect, useState } from 'react';
import {Element} from 'react-scroll';
import Image from "next/image";
import 'animate.css';

export default function HomePage(){

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la posición del scroll
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Define el umbral de visibilidad (ajústalo según sea necesario)
      const threshold = 300;

      // Activa la visibilidad cuando el usuario ha hecho scroll más allá del umbral
      setIsVisible(scrollY > threshold);
    };

    // Agrega un evento de escucha al scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Element name='home' id='home'>
    <div className='font-monserrat pt-10 grid zIndex max-w-[90rem] bg-[--color1]
                            grid-rows-[130px_130px_200px_260px] grid-cols-1 mx-2
                            md:grid-rows-[100px_180px] md:grid-cols-2 md:pt-20 md:mx-[10%] md:pb-10
                            lg:grid-rows-[130px_210px] lg:pb-10
                            xl:grid-rows-[150px_260px] xl:pb-10
                            2xl:grid-rows-[200px_300px]
                            '>
        
        <div className="self-end grid-row-span-1
                        md:flex md:content-center md:flex-wrap md:w-full md:h-full">
        
        <div className="container overflow-hidden min-w-full
                        md:flex md:justify-start">
        
            <h1 className="text-[50px] font-bold uppercase my-0 animate-showText transition-all ease duration-300 delay-100 select-none text-[--color2]
                            sm:text-[100px]
                            md:text-[80px] md:mr-4
                            min-[901px]:text-[90px]
                            lg:text-[100px] lg:font-[600]
                            min-[1086px]:text-[110px]
                            min-[1174px]:text-[130px]
                            xl:text-[125px] xl:tracking-widest
                            min-[1574px]:text-[145px]
                            2xl:text-[150px] 
                            min-[1770px]:text-[170px]">Alexis</h1>
        </div>
        </div>
        <div className="self-start grid-row-span-1 
                        md:flex md:content-center md:flex-wrap md:w-full md:h-full">
        
        <div className="container overflow-hidden
                        md:flex md:justify-end">
        
            <h1 className="text-[50px] font-bold uppercase my-0 animate-showText transition-all ease duration-300 delay-100 select-none text-[--color2]
                            sm:text-[100px]
                            md:text-[80px] md:ml-4
                            min-[901px]:text-[90px]
                            lg:text-[100px] lg:font-[600]
                            min-[1086px]:text-[110px]
                            min-[1174px]:text-[130px]
                            xl:text-[125px] xl:tracking-widest
                            min-[1574px]:text-[145px]
                            2xl:text-[150px] 
                            min-[1770px]:text-[170px]">Jares</h1>
        </div>
        </div>
    <div className="self-start grid-row-span-1 row-start-3 row-end-3 
                    
                    md:row-start-2 md:row-end-2 md:col-start-2 md:col-end-2
                    md:flex md:justify-end md:content-center md:flex-wrap md:w-full md:h-full">
      
      <div className="container flex flex-wrap row-start-3 row-end-3 col-start-2 col-end-2 text-md max-w-lg animate__animated animate__fadeIn animate__delay-2s
                      sm:text-xl sm:max-w-2xl
                      md:content-center md:text-xs md:ml-3
                      lg:text-[17px] 
                      xl:text-lg">
      
        <p className="uppercase font-[400] text-[--color2] mb-8 md:mb-8 lg:mb-8 xl:mb-10">I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore.</p>
        <p className="uppercase font-[400] underline text-lg text-[--color2]"> React Frontend Developer </p>
      </div>
    </div>
    <div className="grid-row-span-1
                    sm:justify-self-start
                    md:row-start-2 md:row-end-2">
    
      <div className="row-start-2 row-end-2 col-span-2 container w-full h-full inline
                      ">
        <Image className="animate-showText transition-all ease duration-300 delay-100
                          sm:w-[700px] sm:h-[300px]
                          md:h-[180px] md:w-full
                          lg:h-[245px]
                          xl:h-[260px]
                          2xl:h-[300px]" src='https://drive.google.com/uc?id=1X0TFJ_BVjrxGbVa75jp4Sayp8jDkZfJ_' width={1000} height={200} alt="Alexis sosteniendo un fibron frente a un pizzarron explicando algo a sus 3 compañeros"/>
      </div>
    </div>
  </div>
  </Element>
}