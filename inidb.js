const sql = require('better-sqlite3');
const db = sql('proyectos.db');

const dummyProyectos = [
  {
    title: 'Coldental',
    slug: 'Coldental',
    image: 'https://drive.google.com/uc?id=1qzLcVLPKWsTsXdsjqQFN2l81uivhV0Me',
    description: 'Esta pagina fue diseñada en WordPress, fue el primer proyecto pago que realice, sin conocimiento previo, pude aprender de forma autonoma como utilizarlo y completar exitosamente la pagina web.',
    link: 'google.com',}
  ,
  {
    title: '4 Pilares Voley',
    slug: '4PilaresVoley',
    image: 'https://drive.google.com/uc?id=1PygWmIkeyR3i_EHnBlVqs61RuODjRSL8',
    description: 'Esta pagina fue un aporte mio hacia el club de voley, ya que tengo una cercania con el fundador del club Hector Rojas. Tanto el logo, como los colores y el diseño fueron adaptados y aplicados por mi',
    link: 'google.com',}
  ,
  {
    title: 'Proyecto 3',
    slug: 'Proyecto 3',
    image: 'https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ',
    description: 'hello',
    link: 'google.com',}
  ,
  {
    title: 'Proyecto 4',
    slug: 'Proyecto 4',
    image: 'https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ',
    description: 'hello',
    link: 'google.com',
  }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS proyectos (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       link TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO proyectos VALUES (
         null,
         @slug,
         @title,
         @image,
         @description,
         @link
        )
   `);

  for (const proyecto of dummyProyectos) {
    stmt.run(proyecto);
  }
}

initData();