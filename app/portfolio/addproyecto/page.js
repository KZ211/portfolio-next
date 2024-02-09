'use client';

import {useFormState} from 'react-dom';

import { shareProyecto } from '@/lib/actions';
import ProyectosFormSubmit from '@/components/proyecto/proyectos-form-submit';

export default function AddProyectoPage() {
  const [state, formAction] = useFormState(shareProyecto, {message:null});
  return (
    <>
      <header className='flex justify-center align-middle my-8'>
        <h1>
          Share your <span>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
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
          <p>
          <ProyectosFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}