import {IoHome} from 'react-icons/io5';
import Image from "next/image";
import Link from "next/link";

import NavLink from "./nav-link";

export default function MainHeader(){
    const logoAlexisUrl = 'https://drive.google.com/uc?id=14MulV47SrRZ27j_BM3lxO-NASyXvQ-3Y';
    return <>
        <header className="flex items-center justify-between px-32 pt-14 mx-32 border-b-2 drop-shadow-lg">
            <Link className="hover:border-r-8 hover:bg-white ease-out duration-300" href='/'>
            <Image src={logoAlexisUrl} width={100} height={100}/>
            </Link>
            
            <nav >
                <ul className="text-white font-exo-2 text-lg ml-10 flex items-center space-x-4">
                    <li><NavLink href='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink href='/sobremi'>Sobre Mi</NavLink></li>
                    <li><NavLink href='/contactame'>Contactame</NavLink></li>
                    <li><NavLink href='/'><IoHome className='size-7 hover:border-b-8 hover:size-8 ease-out duration-300'/></NavLink></li>
                </ul>
            </nav>
        </header>
    </>
}