'use client';

import Link from "next/link";

export default function NavLinkResponsive({title, href, children}){
    return <Link href={href} className="border-b-2">
            <div className="block">
                {children}
                <h3>{title}</h3>
            </div>
        </Link>
}