const sql = require('better-sqlite3');
const db = sql('proyectos.db');

const dummyProyectos = [
  {
    title: 'Proyecto 1',
    slug: 'Proyecto 1',
    image: 'https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ',
  }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS proyectos (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO proyectos VALUES (
         null,
         @slug,
         @title,
         @image
      )
   `);

  for (const proyecto of dummyProyectos) {
    stmt.run(proyecto);
  }
}

initData();