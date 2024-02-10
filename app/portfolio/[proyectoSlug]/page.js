import Image from 'next/image';
import { getProyecto } from '@/lib/proyectos';
import { notFound } from 'next/navigation';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from 'next/link';

export async function generateMetadata({params}){
    const proyecto = getProyecto(params.proyectoSlug);

    if(!proyecto){
        notFound();
    }

    return {
        title: proyecto.title,
        description: proyecto.summary,
    };
}

export default function PortfolioSlug({params}){
    const proyecto = getProyecto(params.proyectoSlug);

    if(!proyecto){
        notFound();
    }

    proyecto.description = proyecto.description.replace(/\n/g, '<br/>')

    return <>
        <header className='text-white mt-4'>
            <div className='flex justify-center'>
                <Image className='rounded-xl' src={proyecto.image} alt={proyecto.title} width={700} height={700}/>
            </div>
            <div className='flex justify-center text-4xl'>
                <h1>
                    <a href={proyecto.link} target='blank'>   
                        {proyecto.title}
                    </a>
                </h1>
            </div>
        </header>
        <main className='flex-col'>
            <div className='flex justify-center text-white text-center mx-52 mt-2 backdrop-filtrer backdrop-blur-lg backdrop-saturate-100'>
                <p 
                dangerouslySetInnerHTML={{
                    __html: proyecto.description,
                }} ></p>
            </div>
            <div className='flex justify-center'>
                <Link href={proyecto.link}><IoIosArrowDroprightCircle className='w-20 h-20 text-white'/></Link>
            </div>
        </main>
    </>;
}