'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import classes from './nav-var.module.css';
import 'animate.css';

export default function NavBar(){
    const [currentState, setCurrentState] = useState(true);
    const [inicializated, setInicializated] = useState(false);

    function changeHandler(event){
        currentState == true ? setCurrentState(false):setCurrentState(true);
        setInicializated(true);
        console.log(currentState);
    }

    const logoImage = 'https://drive.google.com/uc?id=1g3ot02zXMVfMjjtQbQBiuT9RBpmTRT5u';
    return <div className="h-12 bg-white pt-0 px-5 top-0 bottom-auto left-0 right-0 fixed z-10">
        <div className="max-w-6xl flex justify-between items-end mx-auto">
            <div className="inline-block max-w-full">
                <Link className="max-w-full inline-block" href="/">
                    <Image className="max-w-full align-middle inline-block mt-2" 
                    src={logoImage} alt='Logo' width={45} height={20} priority/>
                </Link>
            </div>
            <div className="cursor-pointer block mt-5" onClick={changeHandler}>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? 'rotate-45 translate-y-1 animate-mergeAndRotateTopOut' : 'animate-mergeAndRotateTop'}` : 'w-10 h-px mb-1 bg-black'}`}/>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? 'rotate-45 animate-mergeAndRotateMidOut' : 'animate-mergeAndRotateMid'}` : 'w-10 h-px mb-1 bg-black'}`}/>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? '-rotate-45 -translate-y-1 animate-mergeAndRotateBottomOut' : 'animate-mergeAndRotateBottom'}` : 'w-10 h-px mb-1 bg-black'}`}/>
            </div>
        </div>
        <div className={`${inicializated == true ? `${currentState == true ? ` animate-fadeOutLeft ${classes.active}` : 'animate-fadeInLeft'} ${currentState == true ? classes.navmenu : classes.active}` : 'hidden'}`}>
            <nav className=" w-[380px] max-w-6xl flex flex-row flex-wrap mt-0 mx-auto text-center">
                <ul className=" w-full h-full font-montserrat font-bold">
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText hover:border-{}-2 border-black"}` : ''}`}>
                        <Link className="flex flex-wrap justify-center uppercase group text-6xl sm:text-7xl" href='/'>
                            Home
                            <span className="bg-black h-[1px] w-[232px] -translate-x-96 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="flex flex-wrap justify-center uppercase group text-6xl sm:text-7xl" href='/'>
                            About
                            <span className="bg-black h-[1px] w-[270px] -translate-x-96 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="flex flex-wrap justify-center uppercase group text-6xl sm:text-7xl" href='/projects'>
                            Projects
                            <span className="bg-black h-[1px] w-[370px] -translate-x-96 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-[189,72px] inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="flex flex-wrap justify-center uppercase group text-6xl sm:text-7xl" href='/'>
                            Blog
                            <span className="bg-black h-[1px] w-[200px] -translate-x-80 group-hover:translate-x-0 transition-all ease duration-200"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
}