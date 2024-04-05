import {Element} from 'react-scroll';

export default function AboutPage({isVisible, isVisible2}){

    return <Element name='about' id='about' className='bg-[--color2]'>  
    <div id='about' className="mx-2 max-w-[90rem] bg-[--color2]
                               min-[894px]:flex md:mx-[10%]">
    <div className='font-monserrat pb-10 grid grid-rows-[100px_250px_380px_380px] grid-cols-1 zIndex
                    min-[425px]:grid-rows-[100px_200px_300px_300px]
                    min-[894px]:grid-cols-2 min-[894px]:grid-rows-3'>
        <div className="mt-5 self-center grid-row-span-1 row-start-1 row-end-1">
        <div className="container overflow-hidden">
        <h2 className={`font-monserrat text-ms uppercase font-medium my-0 animate-showText transition-all ease duration-300 delay-100 text-[--color1] ${
            isVisible ? 'animate-showText' : 'opacity-0'
          } transition-all duration-500`}>about</h2>
        </div>
        </div>
        <div className="mt-5 self-center grid-row-span-1 
                        min-[894px]:row-start-2 min-[894px]:row-end-2">
        <div className="container overflow-hidden">
            <h3 className={`text-4xl uppercase font-light my-0 animate-showText transition-all ease duration-300 delay-100 text-[--color1]
                            sm:max-w-2xl
                            min-[894px]:text-5xl min-[894px]:max-w-min-[894px] 
                            lg:max-w-lg
                            xl:max-w-xl 
                            ${isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'} transition-all duration-500`}
            >To sacrifice everything to do what you love, that is the purpose of life.</h3>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        min-[894px]:col-start-2 min-[894px]:col-end-2 min-[894px]:row-start-2 min-[894px]:row-end-2">
        <div className="container overflow-hidden
                        sm:max-w-2xl 
                        min-[894px]:max-w-lg 
                        xl:max-w-[900px] 
                        ">
            <p className={`text-min-[894px] font-medium my-0 opacity-65 animate__animated animate__fadeIn text-[--color1]
                          min-[894px]:text-min-[894px]
                          min-[894px]:ml-2
                          ${isVisible ? 'animate__animated animate__fadeInRight' : 'hidden'} transition-all duration-500`}
                          >Hello, my name is Alexis Jares. I&apos;m an enthusiast of technology in general. I&apos;ve always been that guy whom parents and close relatives would ask for a solution to their phone or computer&apos;s low performance, the one kids would ask to download a video game for them to enjoy, or the one they would request Word or Excel lessons from, as if I were an IT technician. I believe that most of us who are involved in this field have been labeled as &quot;hackers&quot; at some point, even without knowing how to install a program in a Linux terminal.</p>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        min-[894px]:col-start-2 min-[894px]:col-end-2 min-[894px]:row-start-3 min-[894px]:row-end-3">
        <div className="container text-min-[894px] font-medium max-w-xl animate__animated animate__fadeIn animate__delay-2s
                        sm:max-w-2xl 
                        min-[894px]:max-w-lg 
                        lg:max-w-xl 
                        xl:max-w-[900px] 
                         min-[894px]:ml-2">
            <p className={`text-min-[894px] min-[894px]:text-min-[894px] opacity-65 text-[--color1]
                            ${isVisible2 ? 'animate__animated animate__fadeInRight' : 'hidden'} transition-all duration-500`}>The funniest part of the situation is that, despite blushing at those innocent praises, from our perspective, they were the beginning of something wonderful.<br/>I always enjoyed using my computer, although I never imagined that I could work from it. The information it provided me with was more than enough. Later on, I began to explore how I could contribute to the development of an area that was about to flourish. That&apos;s when my attention turned to the path of a frontend developer.</p>
        </div>
        </div>
    </div>
    </div>
    </Element>
}