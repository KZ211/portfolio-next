'use client';

import {useFormState} from 'react-dom';

import { shareProyecto } from '@/lib/actions';
import ProyectosFormSubmit from '@/components/proyecto/proyectos-form-submit';

export default function AddProyectoPage() {
  const [state, formAction] = useFormState(shareProyecto, {message:null});
  return (
    <>
      <header className='flex justify-center my-8'>
        <h1>
          Compartir mas proyectos
        </h1>
      </header>
      <main>
        <form action={formAction}>
          <p className='flex justify-center my-8'> 
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p className='flex justify-center my-8'>
            <label htmlFor='image'>Image</label>
            <input type='text' id='image' name='image'/>
          </p>
          <p className='flex justify-center my-8'>
            <label htmlFor='description'>Description</label>
            <textarea type='text' id='descrpition' name='description'/>
          </p>
          <p className='flex justify-center my-8'>
            <label htmlFor='link'>Link</label>
            <input type='link' id='link' name='link'/>
          </p>
          <p className='flex justify-center my-8'>
          <ProyectosFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}