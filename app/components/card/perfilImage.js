import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";

import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function PerfilImage(){
    return <div className="mb-52">
    <div className="flex flex-row justify-between md:mx-[10%] font-montserrat bg-[--color1]">
        <div className="flex flex-wrap justify-start items-center text-5xl max-w-[15%]">
            <div className="flex flex-wrap items-center max-w-[12rem]">
            <LinkS smooth to='home' className="hover:underline cursor-pointer my-4"><span className="text-[--color6]">H</span>ome</LinkS>
            <LinkS smooth to='about' className="hover:underline cursor-pointer my-4"><span className="text-[--color2]">A</span>bout</LinkS>
            <LinkS smooth to='blog' className="hover:underline cursor-pointer my-4"><span className="text-[--color5]">B</span>log</LinkS>
            <LinkS smooth to='projects' className="hover:underline cursor-pointer my-4"><span className="text-[--color7]">P</span>rojects</LinkS>
            </div>
        </div>
        <div className="mb-4 flex justify-center items-center rounded-3xl
                            md:mx-[10%]">
            <Image className="border border-transparent rounded-[300px]" src='https://drive.google.com/uc?id=1FTXmZoeOiTdEz1CyGqe1ojtGqvdbEIyP' width={350} height={350}/>
        </div>
        <div className="flex flex-wrap items-center justify-end max-w-[15%]">
            <Link target="_blank" href='https://github.com/KZ211' className="flex flex-nowrap items-center justify-end cursor-pointer">
                <h1>Github</h1>
                <LuGithub className="size-20 text-[--color5]"/>
            </Link>
            <Link target="_blank" href='https://www.linkedin.com/in/alexis-jares-b70857235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkXkg3n3jTXOOsJfEpuuxtg%3D%3D'  className="flex flex-nowrap items-center justify-end cursor-pointer">
                <h1>Linkedin</h1>
                <FaLinkedin className="size-20 text-[--color6]"/>
            </Link>
            <Link href='mailto:alexis.jares12@gmail.com' className="flex flex-nowrap items-center justify-end cursor-pointer">
                <h1>Email</h1>
                <MdAlternateEmail className="size-20 text-[--color7]"/>
            </Link>
        </div>
    </div>
        <div className="absolute flex justify-center items-center w-[100%]">
            <Image src='https://drive.google.com/uc?id=1e_QEjOcdA2x94YY09z4wCyEJ3SIvq3Gk' width={100} height={100}/>
        </div>
    </div>
}