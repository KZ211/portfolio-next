import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { RxVercelLogo } from "react-icons/rx";

export default function ProjectsPage(){
    return <>
        <header>
            <main className="grid grid-cols-1 grid-rows-[100px_1000px_1000px_1000px] font-montserrat
                            md:grid-rows-[100px_600px_600px_600px] md:py-10 md:justify-items-center md:px-2">
                <header className="container mx-auto row-start-1 row-end-1
                                    md:mx-0">
                    <h1 className="font-montserrat font-bold uppercase text-md">Projects</h1>
                </header>
                <article className="container row-start-2 row-end-2 mb-32
                                    md:justify-center md:items-center md:justify-self-start md:w-full md:h-full">
                    <div className="md:block">
                        <div className="md:flex md:w-full md:justify-center flex-wrap">
                            <div className="md:flex md:flex-nowrap">
                                <Image className="md:w-96 md:h-96" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' width={1920} height={1536} alt=''/>
                                <div className="border-b-[1px] border-black mb-10 mx-[5%]
                                                md:hidden">
                                    <h1 className="uppercase text-5xl">Project1</h1>
                                    <h3>Web Dev</h3>
                                </div>
                                <div className="flex flex-wrap justify-center items-center
                                                md:mx-4 md:flex md:flex-row md:flex-wrap md:content-stretch">
                                    <p className="mx-auto max-w-[90%]
                                                md:mx-0">
                                        Occaecat eu id ad tempor quis aliqua ipsum. Magna mollit laborum fugiat labore commodo non amet. Sit amet et laboris magna est laboris tempor sunt et eu. Proident dolore non ut ex id pariatur minim culpa. Consequat mollit ea sunt voluptate Lorem id minim eu aliquip duis deserunt ea. Ut quis consequat consectetur pariatur aute occaecat exercitation esse id voluptate nisi laboris anim eu.    
                                    </p>
                                    <div className="flex flex-nowrap items-center my-10 text-center
                                                    md:mx-4 md:flex-row md:items-start md:w-[90%]">
                                        <Link href='https://www.google.com'>
                                            <LuGithub className="mx-4 size-10"/>
                                            <h3>GitHub</h3>
                                        </Link>
                                        <Link href='https://www.google.com'>
                                            <RxVercelLogo className="mx-4 size-10"/>
                                            <h3>Vercel</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-black mb-10 mx-[5%] hidden
                                            md:block md:w-full md:mx-0">
                                <h1 className="uppercase text-5xl">Project1</h1>
                                <h3>Web Dev</h3>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="container justify-end row-start-3 row-end-3 mb-32 
                                    md:justify-center md:items-center md:justify-self-end md:w-full md:h-full">
                    <div className="md:block">
                        <div className="md:flex md:w-full md:flex-row-reverse">
                        <Image className="
                                         md:w-96 md:h-96 md:block" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' width={1920} height={1536} alt=''/>
                            <div className="md:mx-4 md:flex md:flex-wrap md:content-stretch">
                                <div className="border-b-[1px] border-black mb-10 mx-[5%]
                                                md:hidden">
                                    <h1 className="uppercase text-5xl">Project1</h1>
                                    <h3>Web Dev</h3>
                                </div>
                                <div className="flex flex-wrap justify-center items-center
                                            md:mx-4 md:flex md:flex-row md:flex-wrap md:content-stretch">
                                <p className="mx-auto max-w-[90%]
                                             md:mx-0">
                                    Occaecat eu id ad tempor quis aliqua ipsum. Magna mollit laborum fugiat labore commodo non amet. Sit amet et laboris magna est laboris tempor sunt et eu. Proident dolore non ut ex id pariatur minim culpa. Consequat mollit ea sunt voluptate Lorem id minim eu aliquip duis deserunt ea. Ut quis consequat consectetur pariatur aute occaecat exercitation esse id voluptate nisi laboris anim eu.    
                                </p>
                                <div className="flex flex-nowrap items-center my-10 text-center
                                                md:mx-4 md:flex-row md:justify-end md:items-start md:w-[90%]">
                                    <Link href='https://www.google.com'>
                                        <LuGithub className="mx-4 size-10"/>
                                        <h3>GitHub</h3>
                                    </Link>
                                    <Link href='https://www.google.com'>
                                        <RxVercelLogo className="mx-4 size-10"/>
                                        <h3>Vercel</h3>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-black mb-10 mx-[5%] hidden
                                            md:block md:w-full md:mx-0 md:text-end">
                                <h1 className="uppercase text-5xl">Project1</h1>
                                <h3>Web Dev</h3>
                            </div>
                    </div>
                </article>
                <article className="container row-start-4 row-end-4 mb-32 
                                    md:justify-center md:items-center md:justify-self-start">
                    <div className="md:block">
                        <div className="md:flex md:justify-center flex-wrap">
                            <div className="md:flex md:flex-nowrap">
                                <Image className="md:w-96 md:h-96" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' width={1920} height={1536} alt=''/>
                                <div className="border-b-[1px] border-black mb-10 mx-[5%]
                                                md:hidden">
                                    <h1 className="uppercase text-5xl">Project1</h1>
                                    <h3>Web Dev</h3>
                                </div>
                                <div className="flex flex-wrap justify-center items-center
                                                md:mx-4 md:flex md:flex-row md:flex-wrap md:content-stretch">
                                    <p className="mx-auto max-w-[90%]
                                                md:mx-0">
                                        Occaecat eu id ad tempor quis aliqua ipsum. Magna mollit laborum fugiat labore commodo non amet. Sit amet et laboris magna est laboris tempor sunt et eu. Proident dolore non ut ex id pariatur minim culpa. Consequat mollit ea sunt voluptate Lorem id minim eu aliquip duis deserunt ea. Ut quis consequat consectetur pariatur aute occaecat exercitation esse id voluptate nisi laboris anim eu.    
                                    </p>
                                    <div className="flex flex-nowrap items-center my-10 text-center
                                                    md:mx-4 md:flex-row md:items-start md:w-[90%]">
                                        <Link href='https://www.google.com'>
                                            <LuGithub className="mx-4 size-10"/>
                                            <h3>GitHub</h3>
                                        </Link>
                                        <Link href='https://www.google.com'>
                                            <RxVercelLogo className="mx-4 size-10"/>
                                            <h3>Vercel</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-black mb-10 mx-[5%] hidden
                                            md:block md:w-full md:mx-0">
                                <h1 className="uppercase text-5xl">Project1</h1>
                                <h3>Web Dev</h3>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </header>
    </>
}