'use client';

import Link from "next/link";

export default function NavLink({href, children}){
    return <Link className='bg-transparent hover:border-b-4' href={href}>
        {children}
    </Link>
}