import Image from "next/image";
import Link from "next/link";

import NavLink from "./nav-link";

//import logoImg from '';

export default function MainHeader(){
    const logoAlexisUrl = 'https://drive.google.com/uc?id=14MulV47SrRZ27j_BM3lxO-NASyXvQ-3Y';
    return <>
        <header className="flex items-center justify-between px-32 pt-14 mx-32 border-b-2">
            <Link className="mb-5 hover:border-r-4 hover:shadow-black" href='/'>
            <Image src={logoAlexisUrl} width={100} height={100}/>
            </Link>
            
            <nav >
                <ul class="ml-10 flex items-baseline space-x-4">
                    <li><NavLink href='/home'></NavLink></li>
                    <li><NavLink href='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink href='/sobremi'>Sobre Mi</NavLink></li>
                    <li><NavLink href='/contactame'>Contactame</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
}