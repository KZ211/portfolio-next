import React, { useEffect, useState } from 'react';
import {Element} from 'react-scroll';

export default function AboutPage(){

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

    return <Element name='about' id='about'>  
    <div id='about' className="mx-2 max-w-[90rem]
                               min-[894px]:flex md:mx-[10%]">
    <div className='font-monserrat pb-10 grid grid-rows-[100px_250px_380px_380px] grid-cols-1 zIndex
                    min-[425px]:grid-rows-[100px_200px_300px_300px]
                    min-[894px]:grid-cols-2 min-[894px]:grid-rows-3'>
        <div className="mt-5 self-center grid-row-span-1 row-start-1 row-end-1">
        <div className="container overflow-hidden">
        <h2 className={`font-monserrat text-ms uppercase font-medium my-0 animate-showText transition-all ease duration-300 delay-100 ${
            isVisible ? 'animate-showText' : 'opacity-0'
          } transition-all duration-500`}>about</h2>
        </div>
        </div>
        <div className="mt-5 self-center grid-row-span-1 
                        min-[894px]:row-start-2 min-[894px]:row-end-2">
        <div className="container overflow-hidden">
            <h3 className={`text-4xl uppercase font-light my-0 animate-showText transition-all ease duration-300 delay-100
                            sm:max-w-2xl
                            min-[894px]:text-5xl min-[894px]:max-w-min-[894px] 
                            lg:max-w-lg
                            xl:max-w-xl 
                            ${isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'} transition-all duration-500`}
            >To sacrifice everything to do what you love, that is the purpose of life.</h3>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        min-[894px]:col-start-2 min-[894px]:col-end-2 min-[894px]:row-start-2 min-[894px]:row-end-2">
        <div className="container overflow-hidden
                        sm:max-w-2xl 
                        min-[894px]:max-w-lg 
                        xl:max-w-[900px] 
                        ">
            <p className={`text-min-[894px] font-medium my-0 opacity-65 animate__animated animate__fadeIn
                          min-[894px]:text-min-[894px]
                          min-[894px]:ml-2 
                          ${isVisible1 ? 'animate__animated animate__fadeInRight' : 'opacity-0'} transition-all duration-500`}
                          >I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore. <br/> Incididunt ut velit elit deserunt sit cillum aute consectetur. Anim fugiat officia anim velit do excepteur ut consectetur aute anim tempor commodo anim anim. Dolor quis ex in ex pariatur ut id minim. Lorem voluptate culpa cupidatat Lorem proident nulla tempor consequat.</p>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        min-[894px]:col-start-2 min-[894px]:col-end-2 min-[894px]:row-start-3 min-[894px]:row-end-3">
        <div className="container text-min-[894px] font-medium max-w-xl animate__animated animate__fadeIn animate__delay-2s
                        sm:max-w-2xl 
                        min-[894px]:max-w-lg 
                        lg:max-w-xl 
                        xl:max-w-[900px] 
                         min-[894px]:ml-2">
            <p className={`text-min-[894px] min-[894px]:text-min-[894px] opacity-65 
                            ${isVisible2 ? 'animate__animated animate__fadeInRight' : 'opacity-0'} transition-all duration-500`}>Adipisicing voluptate consectetur culpa et. Esse ipsum magna sint pariatur est. Voluptate consectetur mollit tempor ea in sit nostrud sint id irure labore sunt amet. Consectetur nisi anim magna sit pariatur commodo id qui mollit. Esse duis magna aliquip anim quis consequat minim exercitation. Quis dolore mollit duis do amet ut commodo proident fugiat deserunt velit aliqua cupidatat. Magna et in ea voluptate dolore. Exercitation anim voluptate elit id excepteur et anim tempor minim amet laborum nostrud quis. Aliqua minim excepteur labore pariatur non in duis et veniam nostrud occaecat.</p>
        </div>
        </div>
    </div>
    </div>
    </Element>
}