import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function ProjectsPage(){
    return <>
        <h2 className="font-monserrat font-semibold ml-2 text-ms uppercase my-0">Projects</h2>
        <div className='font-monserrat py-10 px-2 grid grid-rows-4 grid-cols-1 zIndex'>
        <div className="self-center grid-row-span-1 mb-20">
            <div className="container center font-semibold overflow-hidden">
                    <Link className="w-full" href='/'>
                        <Image className="inline-block w-full" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={300} height={300}/>
                    </Link>
                    <div className="w-full flex justify-between items-center pb-2 border-b border-black">
                       <div>      
                            <h1 className="text-4xl uppercase mt-5 mb-2 opacity-75">JobConnect</h1>
                            <h3 className="text-lg uppercase">Web Dev</h3>
                        </div>
                        <div>
                            <GoArrowRight className="size-10"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center grid-row-span-1 mb-20">
            <div className="container center font-semibold overflow-hidden">
                    <Link className="w-full" href='/'>
                        <Image className="inline-block w-full" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={300} height={300}/>
                    </Link>
                    <div className="w-full flex justify-between items-center pb-2 border-b border-black">
                       <div>      
                            <h1 className="text-4xl uppercase mt-5 mb-2 opacity-75">JobConnect</h1>
                            <h3 className="text-lg uppercase">Web Dev</h3>
                        </div>
                        <div>
                            <GoArrowRight className="size-10"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center grid-row-span-1 mb-20">
            <div className="container center font-semibold overflow-hidden">
                    <Link className="w-full" href='/'>
                        <Image className="inline-block w-full" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={300} height={300}/>
                    </Link>
                    <div className="w-full flex justify-between items-center pb-2 border-b border-black">
                       <div>      
                            <h1 className="text-4xl uppercase mt-5 mb-2 opacity-75">JobConnect</h1>
                            <h3 className="text-lg uppercase">Web Dev</h3>
                        </div>
                        <div>
                            <GoArrowRight className="size-10"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center grid-row-span-1 mb-20">
            <div className="container center font-semibold overflow-hidden">
                    <Link className="w-full" href='/'>
                        <Image className="inline-block w-full" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={300} height={300}/>
                    </Link>
                    <div className="w-full flex justify-between items-center pb-2 border-b border-black">
                       <div>      
                            <h1 className="text-4xl uppercase mt-5 mb-2 opacity-75">JobConnect</h1>
                            <h3 className="text-lg uppercase">Web Dev</h3>
                        </div>
                        <div>
                            <GoArrowRight className="size-10"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center grid-row-span-1 mb-20">
            <div className="container center font-semibold overflow-hidden">
                    <Link className="w-full" href='/'>
                        <Image className="inline-block w-full" src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={300} height={300}/>
                    </Link>
                    <div className="w-full flex justify-between items-center pb-2 border-b border-black">
                       <div>      
                            <h1 className="text-4xl uppercase mt-5 mb-2 opacity-75">JobConnect</h1>
                            <h3 className="text-lg uppercase">Web Dev</h3>
                        </div>
                        <div>
                            <GoArrowRight className="size-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}