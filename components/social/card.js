import Link from "next/link"
import { DiAndroid } from "react-icons/di"

export default function Card({icon, text, href}){
    return <Link className="flex flex-col justify-center items-center mx-10 mt-16" href={href} target="_blank" rel="noopener noreferrer">
            {icon}
        <h1 className='text-4xl'>{text}</h1>
    </Link>
}