export default function AboutPage(){
    return <>  
    <div className="sm:flex xl:justify-center">
    <div className='font-monserrat py-10 grid grid-rows-3 grid-cols-1 zIndex
                    md:grid-cols-2 md:grid-rows-3 ml-2 
                    lg:mx-auto 
                    xl:px-2'>
        <div className="mt-5 self-center grid-row-span-1 ">
        <div className="container overflow-hidden">
        <h2 className="font-monserrat text-ms uppercase font-medium my-0">about</h2>
        </div>
        </div>
        <div className="mt-5 self-center grid-row-span-1 
                        md:row-start-2 md:row-end-2">
        <div className="container overflow-hidden">
            <h3 className="text-4xl uppercase font-light my-0
                            sm:max-w-2xl
                            md:text-5xl md:max-w-md 
                            lg:max-w-md 
                            xl:max-w-xl 
                            2xl:max-w-3xl"
            >To sacrifice everything to do what you love, that is the purpose of life.</h3>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        sm:col-start-2 sm:col-end-2 sm:row-start-2 sm:row-end-2">
        <div className="container overflow-hidden
                        sm:max-w-xl md:max-w-lg lg:max-w-md xl:max-w-[650px] 2xl:max-w-2xl">
            <p className="text-sm font-medium my-0 opacity-65
                          md:text-md
                          sm:ml-2 
            ">I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore.</p>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        sm:col-start-2 sm:col-end-2 sm:row-start-3 sm:row-end-3">
        <div className="container text-md font-medium max-w-xl
                        sm:max-w-xl md:max-w-lg lg:max-w-md xl:max-w-[650px] 2xl:max-w-2xl sm:ml-2">
            <p className="text-sm md:text-md opacity-65">Adipisicing voluptate consectetur culpa et. Esse ipsum magna sint pariatur est. Voluptate consectetur mollit tempor ea in sit nostrud sint id irure labore sunt amet. Consectetur nisi anim magna sit pariatur commodo id qui mollit. Esse duis magna aliquip anim quis consequat minim exercitation.</p>
        </div>
        </div>
    </div>
    </div>
    </>
}