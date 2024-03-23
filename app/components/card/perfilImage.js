import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";

import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function PerfilImage(){

    const logoAJ = 'https://drive.google.com/uc?id=1e_QEjOcdA2x94YY09z4wCyEJ3SIvq3Gk';
    const alexisImage = 'https://drive.google.com/uc?id=1FTXmZoeOiTdEz1CyGqe1ojtGqvdbEIyP';

    return <div className="mb-52 sm:flex-nowrap">
        <div className="mb-4 flex justify-center items-center rounded-3xl
                        sm:hidden">
                <Image className="border border-transparent rounded-[300px]" src={alexisImage} alt="imagen de alexis con una mano en el menton mirando a la nada" width={350} height={350}/>
            </div>
    <div className="flex flex-row justify-center item flex-wrap md:mx-[10%] font-montserrat bg-[--color1] z-[999] mb-10
                    sm:justify-between sm:flex-nowrap">
        <div className="hidden text-5xl max-w-[15%] w-full
                        sm:flex sm:text-start sm:justify-start sm:items-center
                        min-[1900px]:text-7xl">
            <div className="flex flex-wrap items-center max-w-[12rem]">
            <LinkS smooth to='home' className="hover:underline cursor-pointer my-4"><span className="text-[--color6]">H</span>ome</LinkS>
            <LinkS smooth to='about' className="hover:underline cursor-pointer my-4"><span className="text-[--color2]">A</span>bout</LinkS>
            <LinkS smooth to='blog' className="hover:underline cursor-pointer my-4"><span className="text-[--color5]">B</span>log</LinkS>
            <LinkS smooth to='projects' className="hover:underline cursor-pointer my-4"><span className="text-[--color7]">P</span>rojects</LinkS>
            </div>
        </div>
        <div className="mb-4 flex justify-center items-center rounded-3xl
                            md:mx-[10%] min-[1900px]:max-w-[40%]">
            <Image className="border border-transparent rounded-[300px] hidden
                              sm:block min-[1900px]:w-[500px] min-[1900px]:h-[500px]" src={alexisImage} alt="imagen de alexis con una mano en el menton mirando a la nada" width={350} height={350}/>
        </div>
        <div className="flex flex-nowrap items-end justify-center max-w-[15%]
                        sm:flex-wrap md:justify-end">
            <Link target="_blank" className="flex flex-wrap items-center justify-center cursor-pointer mx-4 md:justify-end md:flex-nowrap md:m-0" href='https://github.com/KZ211'>
                <h1 className="min-[1900px]:text-xl">Github</h1>
                <LuGithub className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color5] rounded-tl-[20%] rounded-br-[20%] ml-1"/>
            </Link>
            <Link target="_blank" className="flex flex-wrap items-center justify-center cursor-pointer mx-4 md:justify-end md:flex-nowrap md:m-0" href='https://www.linkedin.com/in/alexis-jares-b70857235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkXkg3n3jTXOOsJfEpuuxtg%3D%3D'>
                <h1 className="min-[1900px]:text-xl">Linkedin</h1>
                <FaLinkedinIn className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color6] rounded-tl-[15%] rounded-br-[15%] ml-1"/>
            </Link>
            <Link  className="flex flex-wrap items-center justify-center cursor-pointer mx-4 md:justify-end md:flex-nowrap md:m-0" href='mailto:alexis.jares12@gmail.com'>
                <h1 className="min-[1900px]:text-xl">Email</h1>
                <MdAlternateEmail className="size-20 min-[1900px]:size-28 text-[--color1] bg-[--color7] rounded-tl-[20%] rounded-br-[20%] ml-1"/>
            </Link>
        </div>
    </div>
        <div className="absolute justify-center items-center w-[100%] flex">
            <Image src={logoAJ} alt="Logo con las iniciales AJ, contiene un 70% del logo en negro y algunos detalles en colores llamativos" width={100} height={100}/>
        </div>
    </div>
}