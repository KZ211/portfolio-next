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
    const styleIcons = 'my-1 w-16 h-16 transition-all ease-in hover:scale-150';
    
    return <header id='aboutme' className="hidden snap-center lg:flex flex-col justify-center items-center mt-8 text-white">
        <div className="flex flex-row">
            <section className=" max-w-96 text-center backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-lg">
                <h1 className="text-3xl underline">Presentation</h1>
                <h3 className="font-bold text-sm">My trajectory</h3>
                <p className="mx-2">I embarked on the journey of learning to program during the isolation measures imposed by the SARS-CoV-2.<br/>
                    I learned to program in Java, gradually delving into more skills and languages. Until the day I stumbled upon the field of web development, a realm that swiftly captured my interest for its fusion of aesthetics and functionality. My outstanding performance and dedication propelled me to advance significantly in a short period.<br/>
                    Later, I entered university, as the technological realm is my passion, and my goal is to professionalize myself, ensuring I stay updated and not stagnate in my professional trajectory.<br/>
                    I have extensive knowledge focused on front-end development, and I would love to continue growing, learning, and experimenting with new skills, both professionally and socially.
                </p>
            </section>
            <section className="flex flex-col items-center max-w-80 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-lg">
                <h1 className="font-bold text-1xl underline mx-2">Lenguajes y Frameworks</h1>
                <div className="flex flex-row">
                    <div className="flex flex-col mt-4 mx-6 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-xl">
                        <DiReact className={styleIcons}/>
                        <SiNextdotjs className="m-1 w-14 h-16 transition-all ease-in hover:scale-150"/>
                        <DiJavascript className={styleIcons}/>
                        <DiHtml5 className={styleIcons}/>
                        <DiCss3 className={styleIcons}/>
                        <DiWordpress className={styleIcons}/>
                        <DiJava className={styleIcons}/>
                    </div>
                </div>
            </section>
        </div>
    </header>
}