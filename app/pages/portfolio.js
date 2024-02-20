import ProyectosGrid from "@/components/proyecto/proyectos-grid";
import { getProyectos } from "@/lib/proyectos";
import { Suspense } from "react";

export const metadata = {
    title: 'PortFolio',
    description: 'Mis Proyectos.',
  };

async function Proyectos(){
    const proyectos = await getProyectos();
    
    return <ProyectosGrid proyectos={proyectos}/>
}

export default function PortFolioPage(){
    
    return <>
        <header id='portfolio' className="hidden lg:flex justify-center text-xl text-white">
            <h1>My Projects</h1>
        </header>
        <main className="hidden lg:flex justify-center pb-64">
            <Suspense fallback={<p>Fetching proyecto</p>}>
                <Proyectos/>
            </Suspense>
        </main>
    </>
}