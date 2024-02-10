'use server';

import { redirect } from "next/navigation";
import { saveProyecto } from "./proyectos";
import { revalidatePath } from "next/cache";

function isInvalidText(text){
    let textTrim = text.trim();
    return !text || textTrim === '';
}
export async function shareProyecto(prevState, formData){
    const proyecto = {
        title: formData.get('title'),
        image: formData.get('image'),
        description: formData.get('description'),
        link: formData.get('link'),
    }

    if(isInvalidText(proyecto.title)
         || !proyecto.image || proyecto.image.size === 0){
        return {
            message: 'Invalid Input.'
        };
    }

    await saveProyecto(proyecto);
    revalidatePath('/portfolio');
    redirect('/portfolio');
}