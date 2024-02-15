import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  const alexisImage = 'https://drive.google.com/uc?id=1BwVe9HB2NfjvB72hK5tJz2SjxCm6brIm';
  return (
      <header className="flex md:flex-col justify-center items-center">
        <div className="flex sm:flex-col md:flex-col lg:flex-row justify-between items-center">  
          <Image 
            className="
            sm:mt-3 lg:mt-1 xl:mt-5 2xl:mt-10  
            lg:ml-32 xl:ml-32 2xl:ml-72 
            sm:w-52 sm:h-64 md:w-52 md:h-64 lg:size-auto
            rounded-md transition-opacity duration-300 ease-in-out hover:opacity-75"
            src={alexisImage} 
            alt='Alexis sonriendo con un saco y una remera blanca' 
            width={300} height={300}/>
            <secction className='
              sm:mt-1 md:mt-1 lg:mt-3 xl:mt-7 2xl:mt-14 
              lg:ml-2 xl:ml-5 2xl:ml-10 
              lg:mr-24 xl:mr-36 2xl:mr-72 
              text-center  text-white'>
              <h1 className="
                sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl
                sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2 2xl:mb-2
                font-exo-2">
                Alexis Isaias Jares
              </h1>
              <h3 className="2xl:mb-3" ><b>Full Stack Developer</b></h3>
              <p className="
               sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg
               sm: md:max-w-xl lg:max-w-max
               backdrop-filter backdrop-blur-lg backdrop-saturate-100 rounded-xl">Hola, me llamo Alexis Jares, soy estudiante de Ingenieria en Computacion en la Universidad de Tres de Febrero (UNTREF) Y desarrollador web, la tecnologia es mi pasion desde muy pequeño, por eso sacrifique todo para trabajar en el area que tanto me apasiona. <br/> 
                La persona que puso toda su confianza y esmero en verme crecer, la cual me guio y me dio todas las herramientas que necesitaba para formarme hasta llegar a lo que soy, es <a className="text-xl font-bold" href="https://www.linkedin.com/in/stevearagonsite/?originalSubdomain=ar" target="blank" rel="noopener noreferrer">Steven Aragon</a>, 
                Sr en programacion y licenciado en Desarrollo de Experiencias Virtuales.</p>
              <div className="
                sm: md:mt-1 lg:mt-4 xl:mt-4 2xl:mt-8
                flex justify-around">
                <Link className="sm: md:px-6 lg:px-6 xl:px-6 2xl:px-8 sm: md:py-1 lg:py-1 xl:py-1 2xl:py-2 sm: md:text-md lg:text-lg xl:text-lg 2xl:text-xl border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md bg-gradient-to-r from-indigo-700 transition-opacity duration-300 ease-in-out hover:opacity-50" href="/portfolio">Ver Proyectos</Link>
                <Link className="sm: md:px-6 lg:px-6 xl:px-6 2xl:px-8 sm: md:py-1 lg:py-1 xl:py-1 2xl:py-2 sm: md:text-md lg:text-lg xl:text-lg 2xl:text-xl border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md transition-opacity duration-300 ease-in-out hover:opacity-50" href="https://docs.google.com/document/d/17VeumtLSh_Ejs1vRHFdE1-_tJW5kojaiL845JQp2W48/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Ver mi CV</Link>
              </div>
            </secction>
        </div>
      </header>
);
}
