import ProyectoItem from './proyecto-item';

export default function ProyectosGrid({proyectos}){
    return <ul className='w-11/12 h-11/12 grid grid-cols-3 grid-rows-2'>
        {proyectos.map(proyecto => <li className='text-center border backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-md text-lg m-4 text-transparent hover:text-white' key={proyecto.id}>
            <ProyectoItem {...proyecto}/>
        </li>)}
    </ul>
}