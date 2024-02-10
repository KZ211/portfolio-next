import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import axios from 'axios';

const db = sql('proyectos.db');

export async function getProyectos(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //throw new Error('Loading proyectos failed');
    return db.prepare('SELECT * FROM proyectos').all();
}

export /*async*/ function getProyecto(slug){
    return db.prepare('SELECT * FROM proyectos WHERE slug = ?').get(slug);
}

export async function saveProyecto(proyecto){
    proyecto.slug = slugify(proyecto.title, { lower:true});
    const imageUrl = proyecto.image;

    db.prepare(`
        INSERT INTO proyectos 
        (title, image, slug, description)
        VALUES (
            @title,
            @image,
            @slug,
            @description
        )
    `).run(proyecto);
}