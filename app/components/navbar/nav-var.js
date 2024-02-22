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

    const logoImage = 'https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ';
    return <div className=" h-12 bg-white font-monserrat pt-0 px-5 top-0 bottom-auto left-0 right-0 fixed z-10">
        <div className="max-w-6xl flex justify-between items-end mx-auto">
            <div className="inline-block max-w-full">
                <Link className="max-w-full inline-block" href="/">
                    <Image className="max-w-full align-middle inline-block" src={logoImage} alt='Logo' width={39} height={7} priority/>
                </Link>
            </div>
            <div className="cursor-pointer block mt-5" onClick={changeHandler}>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? 'rotate-45 translate-y-1 animate-mergeAndRotateTopOut' : 'animate-mergeAndRotateTop'}` : 'w-10 h-px mb-1 bg-black'}`}/>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? 'rotate-45 animate-mergeAndRotateMidOut' : 'animate-mergeAndRotateMid'}` : 'w-10 h-px mb-1 bg-black'}`}/>
                    <div className={`${inicializated == true ? `w-10 h-px mb-1 bg-black transition-transform ease-in-out duration-300 ${currentState ? '-rotate-45 -translate-y-1 animate-mergeAndRotateBottomOut' : 'animate-mergeAndRotateBottom'}` : 'w-10 h-px mb-1 bg-black'}`}/>
            </div>
        </div>
        <div className={`${inicializated == true ? `${currentState == true ? ` animate-fadeOutLeft ${classes.active}` : 'animate-fadeInLeft'} ${currentState == true ? classes.navmenu : classes.active}` : 'hidden'}`}>
            <nav className=" w-80 max-w-6xl flex flex-row flex-wrap mt-0 mx-auto text-center">
                <ul className=" w-full h-full">
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="text-6xl uppercase" href='/'>Home</Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="text-6xl uppercase" href='/'>About</Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="text-6xl uppercase " href='/projects'>Projects</Link>
                    </li>
                    <li className={`${inicializated == true ? `max-w-full inline-block mt-5 mb-2 ${currentState == true ? 'animate-hiddenText' : "animate-showText"}` : ''}`}>
                        <Link className="text-6xl uppercase" href='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
}