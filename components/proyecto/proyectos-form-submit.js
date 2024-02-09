'use client';

import {useFormStatus} from 'react-dom';

export default function ProyectosFormSubmit(){
    const {pending} = useFormStatus();

    return <button disabled={pending}>
        {pending ? 'Submitting...' : 'Share Proyecto'}
    </button>
}