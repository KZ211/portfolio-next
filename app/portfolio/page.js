import ProyectosGrid from "@/components/proyecto/proyectos-grid";
import { getProyectos } from "@/lib/proyectos";
import { Suspense } from "react";

async function Proyectos(){
    const proyectos = await getProyectos();
    
    return <ProyectosGrid proyectos={proyectos}/>
}

export default function PortFolioPage(){
    
    return <>
        <main>
            <Suspense fallback={<p>Fetching proyecto</p>}>
                <Proyectos/>
            </Suspense>
        </main>
    </>
}