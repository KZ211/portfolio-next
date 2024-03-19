'use client';

import Image from "next/image";
//import Link from "next/link";
import { useState } from "react";
import {Link} from 'react-scroll';

import classes from './nav-var.module.css';
import 'animate.css';

export default function NavBar(){
    const [currentState, setCurrentState] = useState(true);
    const [inicializated, setInicializated] = useState(false);

    function changeHandler(event){
        currentState == true ? setCurrentState(false):setCurrentState(true);
        setInicializated(true);
    }

    const logoImage = 'https://drive.google.com/uc?id=1e_QEjOcdA2x94YY09z4wCyEJ3SIvq3Gk';
    return <div className="mx-2 h-16 w-full bg-[--color1] pt-0 top-0 bottom-auto left-0 right-0 fixed z-10 border-b-2
                            md:mx-0">
        <div className="flex justify-between items-center md:mx-[10%]">
            <div className="inline-block max-w-full">
                <Link to='home' smooth duration={500} className="max-w-full inline-block cursor-pointer">
                    <Image className="max-w-full align-middle inline-block mt-2 w-auto h-auto saturate-150" 
                    src={logoImage} alt='Logo' width={55} height={30} priority/>
                </Link>
            </div>
            <div className="cursor-pointer block mt-5 mr-3" onClick={changeHandler}>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? 'rotate-45 translate-y-1 animate-mergeAndRotateTopOut' : 'animate-mergeAndRotateTop'}` : 'w-10 h-px mb-1 bg-black'}`}/>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? 'rotate-45 animate-mergeAndRotateMidOut' : 'animate-mergeAndRotateMid'}` : 'w-10 h-px mb-1 bg-black'}`}/>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? '-rotate-45 -translate-y-1 animate-mergeAndRotateBottomOut' : 'animate-mergeAndRotateBottom'}` : 'w-10 h-px mb-1 bg-black'}`}/>
            </div>
        </div>
        <div className={`${inicializated == true ? `${currentState == true ? ` animate-fadeOutLeft ${classes.active}` : 'animate-fadeInLeft'} ${currentState == true ? classes.navmenu : classes.active}` : 'hidden'}`}>
            <nav className=" w-[380px] max-w-6xl flex flex-row flex-wrap mt-0 mx-auto text-center">
                <ul className=" w-full h-full font-montserrat font-[400]">
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText hover:border-{}-2 border-black"}` : ''}`}>
                        <Link to='home' smooth duration={500} onClick={changeHandler} className="flex flex-wrap justify-center uppercase group text-6xl min-[327px]:text-6xl min-[396px]:text-7xl cursor-pointer">
                            Home
                            <span className="bg-black h-[1px] w-[232px] -translate-x-96 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link to='about' smooth duration={500} onClick={changeHandler} className="flex flex-wrap justify-center uppercase group text-6xl min-[327px]:text-6xl min-[396px]:text-7xl cursor-pointer">
                            About
                            <span className="bg-black h-[1px] w-[270px] -translate-x-96 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-[189,72px] inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link to='blog' smooth duration={500} onClick={changeHandler} className="flex flex-wrap justify-center uppercase group text-6xl min-[396px]:text-7xl cursor-pointer">
                            Blog
                            <span className="bg-black h-[1px] w-[200px] -translate-x-80 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link to='projects' smooth duration={500} onClick={changeHandler} className="flex flex-wrap justify-center uppercase group text-6xl min-[327px]:text-6xl min-[396px]:text-7xl cursor-pointer">
                            Projects
                            <span className="bg-black h-[1px] w-[370px] -translate-x-96 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
}