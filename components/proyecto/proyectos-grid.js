import ProyectoItem from './proyecto-item';

export default function ProyectosGrid({proyectos}){
    return <ul className='w-11/12 h-11/12 grid grid-cols-2 grid-rows-3'>
        {proyectos.map(proyecto => <li className='flex justify-center text-center border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md text-lg' key={proyecto.id}>
            <ProyectoItem {...proyecto}/>
        </li>)}
    </ul>
}