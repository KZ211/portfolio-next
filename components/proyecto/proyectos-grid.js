import ProyectoItem from './proyecto-item';

export default function ProyectosGrid({proyectos}){
    return <ul className='w-11/12 max-w-96 flex grid-rows-3 grid-cols-3'>
        {proyectos.map(proyecto => <li key={proyecto.id}>
            <ProyectoItem {...proyecto}/>
        </li>)}
    </ul>
}