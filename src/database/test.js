const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  // inserir dados na tabela
    await saveOrphanage(db, {
      lat: "-27.2162247",
      lng: "-49.6511754",
      name:"Lar dos meninos" ,
      about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "47 99999-9999",
      images: [
        "https://images.unsplash.com/photo-1597317408873-2e49aed6fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1526069975384-bc9f055e12a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horários de visitas Das 8hrs até 18h",
      open_on_weekends: "0"
    })
  
  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // consultar somente 1 orphanages, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id="3"')
  console.log(orphanage)

  // deletar dado da tabela
  // console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
})