'use client';

import Link from "next/link";


export default function NavLink({href, children}){
    return <Link href={href} className='hover:border-b-4 hover:text-xl ease-out duration-300'>
        {children}
    </Link>
}