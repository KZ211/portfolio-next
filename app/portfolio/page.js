import ProyectosGrid from "@/components/proyecto/proyectos-grid";
import { getProyectos } from "@/lib/proyectos";
import { Suspense } from "react";

async function Proyectos(){
    const proyectos = await getProyectos();
    
    return <ProyectosGrid proyectos={proyectos}/>
}

export default function PortFolioPage(){
    
    return <>
        <header className="flex justify-center text-xl text-white">
            <h1>Mis Proyectos</h1>
        </header>
        <main className="flex justify-center">
            <Suspense fallback={<p>Fetching proyecto</p>}>
                <Proyectos/>
            </Suspense>
        </main>
    </>
}