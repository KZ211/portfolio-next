export default function AboutPage(){
    return <>  
    <h2 className="ml-2 text-ms uppercase my-0 font-light">about</h2>
    <div className='font-monserrat py-10 px-2 grid grid-rows-2 grid-cols-1 zIndex'>
        <div className="mt-5 max-w- self-center grid-row-span-1 ">
        <div className="container overflow-hidden">
            <h3 className="text-3xl font-monserrat font-light uppercase my-0">To sacrifice everything to do what you love, that is the purpose of life.</h3>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 ">
        <div className="container overflow-hidden">
            <p className="text-md text-gray-500 my-0">I&apos;m a Computer Engineering student at the University of Tres de Febrero (UNTREF) and a web developer. Technology has been my passion since I was very young, which is why I&apos;ve sacrificed everything to work in a field that i adore.</p>
        </div>
        </div>
        <div className="mt-5 self-start grid-row-span-1 ">
        <div className="container text-md max-w-sm">
            <p className="uppercase font-thin">Lorem Ipsum</p>
        </div>
        </div>
    </div>
    </>
}