import Image from "next/image";
import Link from "next/link";

export default function HomePage(){
    const myImage = 'https://drive.google.com/uc?id=1BwVe9HB2NfjvB72hK5tJz2SjxCm6brIm';
    return <>
        <header id='home' className="flex md:flex-col justify-center items-center pb-40 pt-5">
        <div className="flex sm:flex-col md:flex-col lg:flex-col justify-between items-center">  
            <div className="flex flex-row items-center">
            <Image className="mr-5 mt-4 rounded-xl transition ease-in duration-300 hover:opacity-30"
            src={myImage}
            alt="Photograph of Alexis looking to the right while walking on a sidewalk" 
            width={300} 
            height={300}/>
            <section className="text-white text-center">
            <h1 className="
                sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl
                ml-5
                font-exo-2 font-bold transition-all ease-in duration-300 hover:scale-110 border-b-4">
                Alexis Jares
            </h1>
            <h3 className="text-2xl transition-all ease-in duration-300 hover:text-3xl" ><b>Frontend Developer</b></h3>
            </section>

            </div>
            <secction className='
              sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2 2xl:mt-4 
              text-center  text-white'>
              <p className="
               sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg
               sm: md:max-w-xl lg:max-w-max 2xl:max-w-5xl
               backdrop-filter backdrop-blur-lg backdrop-saturate-100 rounded-xl transition-all ease-in duration-300">Hello, my name is Alexis Jares. I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that I&apos;</p>
              <div className="
                sm: md:mt-1 lg:mt-4 xl:mt-4 2xl:mt-8
                flex justify-around">
                <Link className="sm: md:px-6 lg:px-6 xl:px-6 2xl:px-8 sm: md:py-1 lg:py-1 xl:py-1 2xl:py-2 sm: md:text-md lg:text-lg xl:text-lg 2xl:text-2xl border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md transition-opacity duration-300 ease-in-out hover:opacity-50" href="/portfolio">
                    My Projects
                </Link>
                <Link className="sm: md:px-6 lg:px-6 xl:px-6 2xl:px-8 sm: md:py-1 lg:py-1 xl:py-1 2xl:py-2 sm: md:text-md lg:text-lg xl:text-lg 2xl:text-2xl border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md transition-opacity duration-300 ease-in-out hover:opacity-50" href="https://docs.google.com/document/d/17VeumtLSh_Ejs1vRHFdE1-_tJW5kojaiL845JQp2W48/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  See my CV
                </Link>
              </div>

            </secction>
        </div>
      </header>
    </>
}