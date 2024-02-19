import Image from "next/image";
import { DiMysql, DiSqllite, DiPython, DiJava, DiJavascript, DiReact, DiHtml5, DiCss3, DiPhp, DiWordpress } from "react-icons/di";
import { SiGit, SiNextdotjs } from "react-icons/si";

export const metadata = {
    title: 'Sobre Mi',
    description: 'Aptitudes e info.',
  };

export default function AboutMe(){
    const images = {
        alexis:'https://drive.google.com/uc?id=1km5xxzjNk4WitcvzbniCktIhn9dNX1I9',
    };
    const styleIcons = 'w-16 h-16 transition-all ease-in hover:scale-150';
    
    return <header id='aboutme' className="flex flex-col justify-center items-center mt-8 text-white">
        <div className="flex flex-row">
            <section className=" max-w-96 text-center backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-lg">
                <h1 className="text-3xl underline">Presentation</h1>
                <h3 className="font-bold text-sm">My trajectory</h3>
                <p className="mx-2">Vengo de una familia trabajadora, humilde y respetuosa, naci en Presidente Derqui, partido de Pilar. Desde pequeño tengo una pasion por la tecnologia, a los 8 años tuve mi primer neetbook, en ese entonces no teniamos la posibilidad economica de contratar un servicio de internet, en mi primer contacto vi la cantidad de contenido y de aprendizaje en la palma de mi mano, entonces mi interes por la programacion se hizo enorme al saber que era el medio para tener siempre ese conocimiento disponible, tuve 2 tratamientos por cancer y en el transcurso de mi recuperacion conoci a <span className="font-bold">Steve Aragon</span> en una fundacion haciendo voluntariado, con el charlabamos mucho sobre computadoras, quien pensaria que nuestros caminos se unirian por esta pasion. <br/> Steve me brindo cursos, su apoyo, y toda su confianza en creer que yo llegaria lejos, hoy en dia mi conocimiento en el rubro es alto, y todo se lo debo a el y a mi entusiasmo por aprender.</p>
            </section>
            <Image className="rounded-lg size-auto transition-opacity duration-300 ease-in-out hover:opacity-75"
                src={images.alexis} 
                alt="Alexis sentado `sobre un cordon con un buzo rosa, lentes de sol y un pantalon blanco" 
                width={400} 
                height={400}
                />
            <section className="flex flex-col items-center max-w-80 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-lg">
                <h1 className="font-bold text-1xl underline">Lenguajes y Frameworks</h1>
                <div className="flex flex-row">
                    <div className="flex flex-col mt-4 mx-6 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-xl">
                        <DiReact className={styleIcons}/>
                        <SiNextdotjs className="w-14 h-16 transition-all ease-in hover:scale-150"/>
                        <DiJavascript className={styleIcons}/>
                        <DiHtml5 className={styleIcons}/>
                        <DiCss3 className={styleIcons}/>
                        <DiWordpress className={styleIcons}/>
                    </div>
                    <div className="flex flex-col mt-4 mx-6 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-xl">
                        <DiJava className={styleIcons}/>
                        <DiMysql className={styleIcons}/>
                        <DiSqllite className={styleIcons}/>
                        <DiPython className={styleIcons}/>
                        <DiPhp className={styleIcons}/>
                        <SiGit className="w-14 h-14 transition-all ease-in hover:scale-150"/>
                    </div>
                </div>
            </section>
        </div>
    </header>
}