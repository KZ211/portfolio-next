import Image from "next/image";

export default function HomePage(){
    return <div className='font-monserrat py-10 px-2 grid grid-rows-5 grid-cols-1 zIndex
                            md:grid-rows-[200px_200px_50px] md:grid-cols-2 md:pt-20 md:pb-10'>
        
        <div className="self-end grid-row-span-1
                        md:flex md:content-center md:flex-wrap md:w-full md:h-full">
        
        <div className="container overflow-hidden min-w-full
                        md:flex md:justify-end">
        
            <h1 className="text-[50px] font-bold uppercase my-0 
                            sm:text-[100px]
                            md:text-[98px] md:mr-4
                            lg:text-[130px] lg:font-[600]
                            xl:text-[152px]
                            2xl:text-[185px]">Alexis</h1>
        </div>
        </div>
        <div className="self-start grid-row-span-1 
                        md:flex md:content-center md:flex-wrap md:w-full md:h-full">
        
        <div className="container overflow-hidden
                        md:flex md:justify-start">
        
            <h1 className="text-[50px] font-bold uppercase my-0 
                            sm:text-[100px]
                            md:text-[98px] md:ml-4
                            lg:text-[130px] lg:font-[600]
                            xl:text-[152px]
                            2xl:text-[185px]">Jares</h1>
        </div>
        </div>
    <div className="self-start grid-row-span-1 row-start-3 row-end-3 
                    
                    md:row-start-2 md:row-end-2 md:col-start-2 md:col-end-2
                    md:flex md:justify-start md:content-center md:flex-wrap md:w-full md:h-full">
      
      <div className="container text-md max-w-lg
                      sm:text-xl sm:max-w-2xl
                      md:flex md:content-center md:text-md md:ml-3 md:max-w-lg">
      
        <p className="uppercase font-[400]">I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore.</p>
      </div>
    </div>
    <div className="grid-row-span-1
                    md:w-full md:h-full">
    
      <div className="container text-md row-start-4 row-end-4 h-full flex items-center justify-start
                      md:row-start-3 md:row-end-3 md:w-full md:h-full md:flex md:items-center md:justify-center">
        <p className="uppercase font-[400] underline text-lg"> React Frontend Developer </p>
      </div>
    </div>
    <div className="grid-row-span-1
                    sm:justify-self-center
                    md:row-start-2 md:row-end-2">
    
      <div className="row-start-5 row-end-5 container
                      sm">
        <Image className="sm:w-[700px]
                          md:w-[510px] md:h-[200px]" src='https://drive.google.com/uc?id=1X0TFJ_BVjrxGbVa75jp4Sayp8jDkZfJ_' width={1000} height={200} alt="Alexis sosteniendo un fibron frente a un pizzarron explicando algo a sus 3 compañeros"/>
      </div>
    </div>
  </div>
}