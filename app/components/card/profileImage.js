'use client';

import { useState } from 'react';
import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";

import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdAlternateEmail, MdCheck } from "react-icons/md";

export default function PerfilImage({isVisible}){
    
    // Estado para controlar el mensaje de "Copiado"
    const [copied, setCopied] = useState(false);

    const logoAJ = 'https://drive.google.com/uc?id=1e_QEjOcdA2x94YY09z4wCyEJ3SIvq3Gk';
    const alexisImage = 'https://drive.google.com/uc?id=1FTXmZoeOiTdEz1CyGqe1ojtGqvdbEIyP';

    // Función para copiar al portapapeles
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('alexis.jares12@gmail.com');
        setCopied(true);
        
        // Restaura el botón a su estado original después de 2 segundos
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="mb-32 sm:flex-nowrap">
            <div className="mb-4 flex justify-center items-center rounded-3xl sm:hidden">
                <Image className="border border-transparent rounded-[300px]" src={alexisImage} alt="imagen de alexis con una mano en el menton mirando a la nada" width={350} height={350}/>
            </div>
            <div className="flex flex-row justify-center item flex-wrap md:mx-[10%] font-montserrat bg-[--color1] z-[999] mb-10 sm:justify-between sm:flex-nowrap">
                <div className={`hidden text-5xl max-w-[15%] w-full sm:flex sm:text-start sm:justify-start sm:items-center min-[1900px]:text-7xl ${isVisible ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft'} transition-all duration-500`}>
                    <div className="flex flex-wrap items-center max-w-[12rem]">
                        <LinkS smooth to='home' className="hover:underline cursor-pointer my-4"><span className="text-[--color6]">H</span>ome</LinkS>
                        <LinkS smooth to='about' className="hover:underline cursor-pointer my-4"><span className="text-[--color2]">A</span>bout</LinkS>
                        <LinkS smooth to='blog' className="hover:underline cursor-pointer my-4"><span className="text-[--color5]">B</span>log</LinkS>
                        <LinkS smooth to='projects' className="hover:underline cursor-pointer my-4"><span className="text-[--color7]">P</span>rojects</LinkS>
                    </div>
                </div>
                <div className={`mb-4 flex justify-center items-center rounded-3xl md:mx-[10%] min-[1900px]:max-w-[40%] ${isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'} transition-all duration-500`}>
                    <Image className="border border-transparent rounded-[300px] hidden sm:block min-[1900px]:w-[500px] min-[1900px]:h-[500px]" src={alexisImage} alt="imagen de alexis con una mano en el menton mirando a la nada" width={350} height={350}/>
                </div>
                <div className={`flex flex-nowrap items-end justify-center max-w-[15%] sm:flex-wrap md:justify-end ${isVisible ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'} transition-all duration-500`}>
                    <Link target="_blank" className="flex flex-wrap items-center justify-center cursor-pointer mx-4 md:justify-end md:flex-nowrap md:m-0" href='https://github.com/KZ211'>
                        <h1 className="min-[1900px]:text-xl">Github</h1>
                        <LuGithub className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color5] rounded-tl-[20%] rounded-br-[20%] ml-1"/>
                    </Link>
                    <Link target="_blank" className="flex flex-wrap items-center justify-center cursor-pointer mx-4 md:justify-end md:flex-nowrap md:m-0" href='https://www.linkedin.com/in/alexis-jares-b70857235'>
                        <h1 className="min-[1900px]:text-xl">Linkedin</h1>
                        <FaLinkedinIn className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color6] rounded-tl-[15%] rounded-br-[15%] ml-1"/>
                    </Link>
                    <button 
                        onClick={handleCopyEmail} 
                        className="flex flex-wrap items-center justify-center cursor-pointer mx-4 md:justify-end md:flex-nowrap md:m-0 outline-none"
                    >
                        <h1 className="min-[1900px]:text-xl transition-all w-20 text-right">
                            {copied ? '¡Copied!' : 'Email'}
                        </h1>
                        {copied ? (
                            <MdCheck className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color7] rounded-tl-[20%] rounded-br-[20%] ml-1 transition-all"/>
                        ) : (
                            <MdAlternateEmail className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color7] rounded-tl-[20%] rounded-br-[20%] ml-1 transition-all"/>
                        )}
                    </button>
                </div>
            </div>
            <div className={`justify-center items-center w-[100%] flex ${isVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'} transition-all duration-500`}>
                <Image src={logoAJ} alt="Logo con las iniciales AJ, contiene un 70% del logo en negro y algunos detalles en colores llamativos" width={100} height={100}/>
            </div>
        </div>
    );
}