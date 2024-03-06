import Image from "next/image";

export default function HomePage(){
    return <div className='font-monserrat py-10 px-2 grid grid-rows-5 grid-cols-1 zIndex
                            sm:grid-rows-3 sm:grid-cols-2 sm:gap-y-10'>
        
        <div className="self-end grid-row-span-1
                        sm:flex sm:content-center sm:flex-wrap sm:w-full sm:h-full">
        
        <div className="container overflow-hidden min-w-full
                        sm:flex sm:justify-end">
        
            <h1 className="text-5xl font-bold uppercase my-0 
                            sm:mr-4
                            xl:text-[10rem] xl:font-thick">Alexis</h1>
        </div>
        </div>
        <div className="self-start grid-row-span-1 
                        sm:flex sm:content-center sm:flex-wrap sm:w-full sm:h-full">
        
        <div className="container overflow-hidden
                        sm:flex sm:justify-start">
        
            <h1 className="text-5xl font-bold uppercase my-0 
                            sm:ml-4
                            xl:text-[10rem] xl:font-thick ">Jares</h1>
        </div>
        </div>
    <div className="self-start grid-row-span-1 row-start-3 row-end-3 
                    
                    sm:row-start-2 sm:row-end-2 sm:col-start-2 sm:col-end-2
                    sm:flex sm:justify-start sm:content-center sm:flex-wrap sm:w-full sm:h-full">
      
      <div className="container text-md max-w-lg
                      sm:flex sm:content-center sm:text-xl sm:max-w-2xl">
      
        <p className="uppercase font-[600]">I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore.</p>
      </div>
    </div>
    <div className="self-center grid-row-span-1
                    sm:flex sm:justify-center sm:content-center sm:flex-wrap sm:w-full sm:h-full">
    
      <div className="container text-md row-start-4 row-end-4
                      sm:row-start-3 sm:row-end-3
                      sm:flex sm:content-end sm:justify-center sm:w-full sm:h-full">
        <p className="uppercase font-[600] underline text-lg"> React Frontend Developer </p>
      </div>
    </div>
    <div className="self-center grid-row-span-1 flex justify-center content-center flex-wrap w-full h-full
                    sm:row-start-2 sm:row-end-2">
    
      <div className="row-start-5 row-end-5 container text-md max-w-sm flex flex-wrap content-center justify-center
                      ">
        <Image src='https://drive.google.com/uc?id=1X0TFJ_BVjrxGbVa75jp4Sayp8jDkZfJ_' width={1000} height={1000} alt="Alexis sosteniendo un fibron frente a un pizzarron explicando algo a sus 3 compañeros"/>
      </div>
    </div>
  </div>
}