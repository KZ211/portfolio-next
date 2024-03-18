import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";

import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function PerfilImage(){
    return <div className="flex flex-row justify-around md:mx-[10%] font-montserrat bg-[--color1] mt-52">
        <div className="flex flex-wrap justify-center items-center text-5xl max-w-20">
            <LinkS smooth to='home' className="hover:underline cursor-pointer"><span className="text-[--color6]">H</span>ome</LinkS>
            <LinkS smooth to='blog' className="hover:underline cursor-pointer"><span className="text-[--color7]">B</span>log</LinkS>
            <LinkS smooth to='about' className="hover:underline cursor-pointer"><span className="text-[--color2]">A</span>bout</LinkS>
            <LinkS smooth to='projects' className="hover:underline cursor-pointer"><span className="text-[--color5]">P</span>rojects</LinkS>
        </div>
        <div className="mb-4 flex justify-center items-center rounded-3xl
                            md:mx-[10%]">
            <Image className="border border-transparent rounded-[300px]" src='https://drive.google.com/uc?id=1FTXmZoeOiTdEz1CyGqe1ojtGqvdbEIyP' width={350} height={350}/>
        </div>
        <div className="flex flex-wrap items-center justify-center max-w-20">
            <Link href='https://www.google.com' className="flex flex-nowrap items-center cursor-pointer">
                <h1>Github</h1>
                <LuGithub className="mx-4 size-20 text-[--color6]"/>
            </Link>
            <Link href='https://www.google.com'  className="flex flex-nowrap items-center">
                <h1>Linkedin</h1>
                <FaLinkedin className="mx-4 size-20 text-[--color5]"/>
            </Link>
            <Link href='https://www.google.com' className="flex flex-nowrap items-center">
                <h1>Email</h1>
                <MdAlternateEmail className="mx-4 size-20 text-[--color7]"/>
            </Link>
        </div>
        <div className="absolute h-[450px] flex items-end">
            <Image className="mb-4" src='https://drive.google.com/uc?id=1e_QEjOcdA2x94YY09z4wCyEJ3SIvq3Gk' width={100} height={100}/>
        </div>
    </div>
}