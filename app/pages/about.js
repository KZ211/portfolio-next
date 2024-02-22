export default function AboutPage(){
    return <>  
    <div className="sm:flex sm:justify-center">
    <div className='font-monserrat py-10 px-2 grid grid-rows-3 grid-cols-1 zIndex
                    sm:grid-cols-2 sm:mx-auto'>
        <div className="mt-5 max-w- self-center grid-row-span-1 ">
        <div className="container overflow-hidden">
        <h2 className="font-monserrat ml-2 text-ms uppercase font-semibold my-0">about</h2>
        </div>
        </div>
        <div className="mt-5 max-w- self-center grid-row-span-1 
                        sm:row-start-2 sm:row-end-2">
        <div className="container overflow-hidden">
            <h3 className="text-3xl uppercase font-bold my-0
                            sm:text-5xl sm:max-w-2xl"
            >To sacrifice everything to do what you love, that is the purpose of life.</h3>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        sm:col-start-2 sm:col-end-2 sm:row-start-2 sm:row-end-2">
        <div className="container overflow-hidden
                        sm:max-w-xl">
            <p className="text-md font-semibold my-0 
                          sm:ml-2
            ">I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore.</p>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 
                        sm:col-start-2 sm:col-end-2 sm:row-start-3 sm:row-end-3">
        <div className="container text-md font-semibold max-w-sm
                        sm:max-w-xl sm:ml-2">
            <p className="">Adipisicing voluptate consectetur culpa et. Esse ipsum magna sint pariatur est. Voluptate consectetur mollit tempor ea in sit nostrud sint id irure labore sunt amet. Consectetur nisi anim magna sit pariatur commodo id qui mollit. Esse duis magna aliquip anim quis consequat minim exercitation.</p>
        </div>
        </div>
    </div>
    </div>
    </>
}