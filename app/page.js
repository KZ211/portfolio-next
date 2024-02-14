import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  const alexisImage = 'https://drive.google.com/uc?id=1BwVe9HB2NfjvB72hK5tJz2SjxCm6brIm';
  return (
    <>
      <header>
        <div className="flex justify-between items-center">  
          <Image 
            className="mt-10 ml-72 rounded-md"
            src={alexisImage} 
            alt='Alexis sonriendo con un saco y una remera blanca' 
            width={300} height={300}/>
            <secction className='text-center mt-14 ml-10 mr-72 text-white'>
              <h1 className="text-6xl font-exo-2 mb-8">
                Alexis Isaias Jares
              </h1>
              <h3 className="mb-5" ><b>Full Stack Developer</b></h3>
              <p className="text-lg backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-xl">Hola, me llamo Alexis Jares, soy estudiante de Ingenieria en Computacion en la Universidad de Tres de Febrero (UNTREF) Y desarrollador web, la tecnologia es mi pasion desde muy pequeño, por eso sacrifique todo para trabajar en el area que tanto me apasiona. <br/> 
                La persona que puso toda su confianza y esmero en verme crecer, la cual me guio y me dio todas las herramientas que necesitaba para formarme hasta llegar a lo que soy, es <a className="text-xl font-bold" href="https://www.linkedin.com/in/stevearagonsite/?originalSubdomain=ar" target="blank">Steven Aragon</a>, 
                Sr en programacion y licenciado en Desarrollo de Experiencias Virtuales.</p>
              <div className="flex justify-around mt-8">
                <Link className="border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md px-8 py-2 text-xl bg-gradient-to-r from-indigo-700" href="/portfolio">Ver Proyectos</Link>
                <Link className="border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md px-8 py-2 text-xl" href="https://docs.google.com/document/d/17VeumtLSh_Ejs1vRHFdE1-_tJW5kojaiL845JQp2W48/edit?usp=sharing" target="_blank">Ver mi CV</Link>
              </div>
            </secction>
        </div>
      </header>
      <main>
      </main>
    </>
);
}
