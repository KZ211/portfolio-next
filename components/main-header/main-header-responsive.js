import Link from "next/link"
import { PiHouseSimpleLight } from "react-icons/pi";

import NavLinkResponsive from "./nav-link-responsive"

export default function MainHeaderResponsive(){
    return <>
        <nav className="absolute flex items-end justify-center h-full w-full">
            <ul className="w-full h-20 flex justify-around items-center bg-black text-white">
                <li>
                    <NavLinkResponsive href='/home' title='Home'>
                        <PiHouseSimpleLight className="m-auto"/>
                    </NavLinkResponsive>
                </li>
                <li>
                    <NavLinkResponsive href='/portfolio' title='portfolio'>
                        <PiHouseSimpleLight className="m-auto"/>
                    </NavLinkResponsive>
                </li>
                <li>
                    <NavLinkResponsive href='/aboutme' title='Aboutme'>
                        <PiHouseSimpleLight className="m-auto"/>
                    </NavLinkResponsive>
                </li>
                <li>
                    <NavLinkResponsive href='/contactme' title='Contactme'>
                        <PiHouseSimpleLight className="m-auto"/>
                    </NavLinkResponsive>
                </li>
                
            </ul>
        </nav>
    </>
}