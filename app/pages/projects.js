'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import {Element} from 'react-scroll';
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { RxVercelLogo } from "react-icons/rx";

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

    return <Element name='projects' id='projects'>
        <header className="md:mx-20">
            <main className="grid grid-cols-1 grid-rows-[150px_1000px_1000px_1000px] font-montserrat justify-items-center
                            md:grid-rows-[100px_600px_600px_600px] md:py-10">
                <header className="container mx-auto row-start-1 row-end-1
                                    md:mx-0 md:justify-self-start">
                    <h1 className={`mt-14 md:mt-4 font-montserrat font-medium uppercase text-md animate-showText transition-all ease duration-300 delay-100 ${
            isVisible ? 'animate-showText' : 'opacity-0'
          } transition-all duration-500`}>Projects</h1>
                </header>
                <article className={`container row-start-2 row-end-2 mb-5 animate-showText transition-all ease duration-300 delay-100
                                    md:justify-center md:items-center md:justify-self-start md:w-full md:h-full ${
                                        isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <div className="md:block">
                        <div className="md:flex md:w-full md:justify-center flex-wrap">
                            <div className="md:flex md:flex-nowrap">
                                <Image className="md:w-96 md:h-96 animate-showText transition-all ease duration-300 delay-500" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' width={1920} height={1536} alt=''/>
                                <div className="border-b-[1px] border-black mb-10 mx-[5%]
                                                md:hidden">
                                    <h1 className="uppercase text-5xl animate__animated animate__fadeIn animate__delay-2s">Project1</h1>
                                    <h3>Web Dev</h3>
                                </div>
                                <div className="flex flex-wrap justify-center items-center
                                                md:mx-4 md:flex md:flex-row md:flex-wrap md:content-stretch">
                                    <p className="mx-auto max-w-[90%] animate__animated animate__fadeIn animate__delay-2s
                                                md:mx-0">
                                        Occaecat eu id ad tempor quis aliqua ipsum. Magna mollit laborum fugiat labore commodo non amet. Sit amet et laboris magna est laboris tempor sunt et eu. Proident dolore non ut ex id pariatur minim culpa. Consequat mollit ea sunt voluptate Lorem id minim eu aliquip duis deserunt ea. Ut quis consequat consectetur pariatur aute occaecat exercitation esse id voluptate nisi laboris anim eu.    
                                    </p>
                                    <div className="flex flex-nowrap items-center my-10 text-center animate__animated animate__fadeIn animate__delay-2s
                                                    md:mx-4 md:flex-row md:items-start md:w-[90%]">
                                        <Link href='https://www.google.com'>
                                            <LuGithub className="mx-4 size-10"/>
                                            <h3>GitHub</h3>
                                        </Link>
                                        <Link href='https://www.google.com'>
                                            <RxVercelLogo className="mx-4 size-10"/>
                                            <h3>Vercel</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-black mb-10 mx-[5%] hidden
                                            md:block md:w-full md:mx-0">
                                <h1 className="uppercase text-5xl">Project1</h1>
                                <h3>Web Dev</h3>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={`container justify-end row-start-3 row-end-3 my-4 animate-showText transition-all ease duration-300 delay-100
                                    md:justify-center md:items-center md:justify-self-end md:w-full md:h-full ${
                                        isVisible1 ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <div className="md:block">
                        <div className="md:flex md:w-full md:flex-row-reverse">
                        <Image className=" animate-showText transition-all ease duration-300 delay-300
                                         md:w-96 md:h-96 md:block" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' width={1920} height={1536} alt=''/>
                            <div className="md:mx-4 md:flex md:flex-wrap md:content-stretch">
                                <div className="border-b-[1px] border-black mb-10 mx-[5%]
                                                md:hidden">
                                    <h1 className="uppercase text-5xl">Project1</h1>
                                    <h3>Web Dev</h3>
                                </div>
                                <div className="flex flex-wrap justify-center items-center
                                            md:mx-4 md:flex md:flex-row md:flex-wrap md:content-stretch">
                                <p className="mx-auto max-w-[90%] animate__animated animate__fadeIn animate__delay-2s
                                             md:mx-0">
                                    Occaecat eu id ad tempor quis aliqua ipsum. Magna mollit laborum fugiat labore commodo non amet. Sit amet et laboris magna est laboris tempor sunt et eu. Proident dolore non ut ex id pariatur minim culpa. Consequat mollit ea sunt voluptate Lorem id minim eu aliquip duis deserunt ea. Ut quis consequat consectetur pariatur aute occaecat exercitation esse id voluptate nisi laboris anim eu.    
                                </p>
                                <div className="flex flex-nowrap items-center my-10 text-center animate__animated animate__fadeIn animate__delay-2s
                                                md:mx-4 md:flex-row md:justify-end md:items-start md:w-[90%]">
                                    <Link href='https://www.google.com'>
                                        <LuGithub className="mx-4 size-10"/>
                                        <h3>GitHub</h3>
                                    </Link>
                                    <Link href='https://www.google.com'>
                                        <RxVercelLogo className="mx-4 size-10"/>
                                        <h3>Vercel</h3>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-black mb-10 mx-[5%] hidden
                                            md:block md:w-full md:mx-0 md:text-end">
                                <h1 className="uppercase text-5xl">Project1</h1>
                                <h3>Web Dev</h3>
                            </div>
                    </div>
                </article>
                <article className={`container row-start-4 row-end-4 my-4 animate-showText transition-all ease duration-300 delay-100
                                    md:justify-center md:items-center md:justify-self-start ${
                                        isVisible2 ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                      } transition-all duration-500`}>
                    <div className="md:block">
                        <div className="md:flex md:justify-center flex-wrap">
                            <div className="md:flex md:flex-nowrap">
                                <Image className="animate-showText transition-all ease duration-300 delay-300
                                                  md:w-96 md:h-96" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' width={1920} height={1536} alt=''/>
                                <div className="border-b-[1px] border-black mb-10 mx-[5%]
                                                md:hidden">
                                    <h1 className="uppercase text-5xl">Project1</h1>
                                    <h3>Web Dev</h3>
                                </div>
                                <div className="flex flex-wrap justify-center items-center
                                                md:mx-4 md:flex md:flex-row md:flex-wrap md:content-stretch">
                                    <p className="mx-auto max-w-[90%] animate__animated animate__fadeIn animate__delay-2s
                                                md:mx-0">
                                        Occaecat eu id ad tempor quis aliqua ipsum. Magna mollit laborum fugiat labore commodo non amet. Sit amet et laboris magna est laboris tempor sunt et eu. Proident dolore non ut ex id pariatur minim culpa. Consequat mollit ea sunt voluptate Lorem id minim eu aliquip duis deserunt ea. Ut quis consequat consectetur pariatur aute occaecat exercitation esse id voluptate nisi laboris anim eu.    
                                    </p>
                                    <div className="flex flex-nowrap items-center my-10 text-center animate__animated animate__fadeIn animate__delay-2s
                                                    md:mx-4 md:flex-row md:items-start md:w-[90%]">
                                        <Link href='https://www.google.com'>
                                            <LuGithub className="mx-4 size-10"/>
                                            <h3>GitHub</h3>
                                        </Link>
                                        <Link href='https://www.google.com'>
                                            <RxVercelLogo className="mx-4 size-10"/>
                                            <h3>Vercel</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-black mb-10 mx-[5%] hidden
                                            md:block md:w-full md:mx-0">
                                <h1 className="uppercase text-5xl">Project1</h1>
                                <h3>Web Dev</h3>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </header>
    </Element>
}