'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuArrowDownRight } from "react-icons/lu";
import { RxVercelLogo } from "react-icons/rx";

export default function ProjectInvert({title, subtitle, description, imageProp, gitHub, vercel, pageIcon, linkGithub, linkVercel, linkPage}){
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
      setIsVisible(scrollY > threshold ? true : false);
      setIsVisible1(scrollY > threshold1 ? true : false);
      setIsVisible2(scrollY > threshold2 ? true : false);
    };

    // Agrega un evento de escucha al scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const fotoEjemplo = imageProp;
    const project1 = 'https://drive.google.com/uc?id=1IrqIKek3r-ZKcefbLeFlseXWGD7k5Lre';
    const project1_1 = 'https://drive.google.com/uc?id=1ah4niKWodBk0nSUBvl2xPyoz3rSbafre';

    return <>
            <div className="min-[894px]:block">
            <div className="min-[894px]:flex min-[894px]:w-full min-[894px]:flex-row-reverse">
            <Image className=" animate-showText transition-all ease duration-300 delay-300 md:border-2 border-[--color2]
                    min-[894px]:w-96 min-[894px]:h-96 min-[894px]:block grayscale hover:grayscale-0" src={fotoEjemplo} width={1920} height={1536} alt=''/>
            <div className="min-[894px]:mx-4 min-[894px]:flex min-[894px]:flex-wrap min-[894px]:content-stretch">
            <div className="border-b-[1px] border-black mb-10 mx-2
                            min-[894px]:hidden">
                <h1 className="uppercase text-5xl text-[color2]">{title}</h1>
                <h3>{subtitle}</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center
                        min-[894px]:mx-4 min-[894px]:flex min-[894px]:flex-row min-[894px]:flex-wrap min-[894px]:content-stretch">
            <p className="mx-2 max-w-[90%] animate__animated animate__fadeIn animate__delay-2s text-[color2]
                        min-[894px]:mx-0">
                {description}    
            </p>
            <div className="flex flex-nowrap items-center my-10 text-center animate__animated animate__fadeIn animate__delay-2s text-[13px] text-[color2]
                            min-[894px]:mx-4 min-[894px]:flex-row min-[894px]:justify-end min-[894px]:items-start min-[894px]:w-[90%]">
                {gitHub == true ? <Link target="_blank" href={linkGithub}>
                    <LuGithub className="mx-4 size-10 bg-[--color5] rounded-tl-[20%] rounded-br-[20%] text-[--color1] w-12 h-12"/>
                    <h3>GitHub</h3>
                </Link> : ''}
                {vercel == true ? <Link target="_blank" href={linkVercel}>
                    <RxVercelLogo className="mx-4 size-10 bg-[--color7] rounded-tl-[20%] rounded-br-[20%] text-[--color1] w-12 h-12"/>
                    <h3>Vercel</h3>
                </Link> : ''}
                {pageIcon == true ? <Link target="_blank" href={linkPage}>
                    <LuArrowDownRight className="mx-4 size-10 bg-[--color6] rounded-tl-[20%] rounded-br-[20%] text-[--color1] w-12 h-12"/>
                    <h3>Page</h3>
                </Link> : ''}
            </div>
            </div>
            </div>
            </div>
            <div className="border-b-[1px] border-[--color2] mb-10 mx-2 hidden
                        min-[894px]:block min-[894px]:w-full min-[894px]:mx-0 min-[894px]:text-end">
            <h1 className="uppercase text-5xl">{title}</h1>
            <h3>{subtitle}</h3>
            </div>
            </div>
</>
}