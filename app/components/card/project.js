'use client';

import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuArrowDownRight } from "react-icons/lu";
import { RxVercelLogo } from "react-icons/rx";

export default function Project({title, subtitle, description, imageProp, gitHub, vercel, pageIcon, linkGithub, linkVercel, linkPage, reverse = false}){

    return <>
            <div className="min-[894px]:block text-[--color2]">
            <div className="min-[894px]:flex min-[894px]:w-full min-[894px]:justify-center flex-wrap">
            <div className={`min-[894px]:flex min-[894px]:flex-nowrap ${reverse ? 'min-[894px]:flex-row-reverse' : ''}`}>
            <Image 
              className="w-full h-full object-cover animate-showText transition-all ease duration-300 delay-500 md:border-2 border-[--color2] min-[894px]:w-96 min-[894px]:h-96 grayscale hover:grayscale-0" 
              src={imageProp} 
              width={1920} 
              height={1536} 
              alt=''
            />
            <div className="border-b-[1px] border-[--color2] mb-10 mx-2
                            min-[894px]:hidden">
                <h1 className="uppercase text-5xl animate__animated animate__fadeIn animate__delay-2s">{title}</h1>
                <h3>{subtitle}</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center
                            min-[894px]:mx-4 min-[894px]:flex min-[894px]:flex-row min-[894px]:flex-wrap min-[894px]:content-stretch">
                <p className="max-w-[90%] animate__animated animate__fadeIn animate__delay-2s
                            min-[894px]:mx-0">
                    {description}   
                </p>
                <div className={`flex flex-nowrap items-center my-10 text-center animate__animated animate__fadeIn animate__delay-2s text-[13px]
                                min-[894px]:mx-4 min-[894px]:flex-row min-[894px]:items-start min-[894px]:w-[90%] ${reverse ? 'min-[894px]:justify-end' : ''}`}>
                    {gitHub == true ? <Link target="_blank" href={linkGithub}>
                        <LuGithub className="mx-4 size-10 bg-[--color5] rounded-tl-[20%] rounded-br-[20%] text-[--color1] w-12 h-12"/>
                        <h3 className='text-[--color2]'>GitHub</h3>
                    </Link> : ''}
                    {vercel == true ? <Link target="_blank" href={linkVercel}>
                        <RxVercelLogo className="mx-4 size-10 bg-[--color7] rounded-tl-[20%] rounded-br-[20%] text-[--color1] w-12 h-12"/>
                        <h3>Vercel</h3>
                    </Link> : ''}
                    {pageIcon == true ? <Link target="_blank" href={linkPage}>
                    <LuArrowDownRight className="mx-4 size-10 bg-[--color6] rounded-tl-[20%] rounded-br-[20%] text-[--color1] w-12 h-12"/>
                    <h3>Page</h3>
                    </Link> : ''}
                </div>
            </div>
            </div>
            <div className={`border-b-[1px] border-[--color2] mb-10 mx-2 hidden
                        min-[894px]:block min-[894px]:w-full min-[894px]:mx-0 ${reverse ? 'min-[894px]:text-end' : ''}`}>
            <h1 className="uppercase text-5xl">{title}</h1>
            <h3>{subtitle}</h3>
            </div>
            </div>
            </div>
    </>
}
