import Image from "next/image";
import Link from "next/link";

import NavLink from "./nav-link";

export default function MainHeader(){
    const logoAlexisUrl = 'https://drive.google.com/uc?id=14MulV47SrRZ27j_BM3lxO-NASyXvQ-3Y';
    return <>
        <header className="hidden lg:flex lg:px-32 lg:pt-8 lg:mx-32 lg:items-center lg:justify-between lg:border-b-2 lg:drop-shadow-lg">
            <Link className="hover:border-r-8 hover:bg-white ease-out duration-300" href='/'>
            <Image alt="Logo AJ" className="size-10" src={logoAlexisUrl} width={100} height={100}/>
            </Link>
            
            <nav className="hidden">
                <ul className="lg:text-white lg:font-exo-2 lg:text-lg ml-10 lg:flex lg:items-center lg:space-x-4">
                    <li><NavLink href='#home'>Home</NavLink></li>
                    <li><NavLink href='#portfolio'>Portfolio</NavLink></li>
                    <li><NavLink href='#aboutme'>AboutMe</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
}