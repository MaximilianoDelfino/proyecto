/* async function datosPersonajes(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();

  console.log(data.name);
  console.log(data.species);
  console.log(data.status)
}

datosPersonajes(1);
datosPersonajes(2);
datosPersonajes(8);
datosPersonajes(14); */

/* async function compararOcupaciones(){
  const res1 = await fetch('https://thesimpsonsapi.com/api/characters/1');
  const personaje1 = await res1.json();

  const res2 = await fetch('https://thesimpsonsapi.com/api/characters/3');
  const personaje2 = await res2.json();

  console.log(personaje1.name,' is a ', personaje1.occupation, 'and ', personaje2.name,' is a ', personaje2.occupation);
  console.log();
}

compararOcupaciones(); */

/* async function personajeYOrigen(id){
  const res1 = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const dataPersonaje = await res1.json();
  const urlOrigen = dataPersonaje.origin.url;
  const res2 = await fetch(urlOrigen);
  const dataOrigen = await res2.json();

  console.log(dataPersonaje.name,'s origin is ',dataOrigen.name,' ', dataOrigen.type,' ',dataOrigen.dimension);
}
personajeYOrigen(1);  */

/* async function buscarSimpson(id){
  try{
    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
    if (!response.ok){
      throw new Error(`Error: Personaje no encontrado`)
    }
    const data = await response.json();
    console.log('Se encontro el personaje, es ',data.name);
  }catch (error){
    console.log('Algo salio mal: ',error.message);
  }
}

buscarSimpson(1);
buscarSimpson(9999);
buscarSimpson(3); */

/* async function busquedaSegura(id){
try{
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!response.ok){
    throw new Error(`Personaje no encontrado`);
  }
  const data = await response.json();
  if (data.status  === "Dead" || data.location.name === "unknown"){
    console.log(data.name,': Este personaje esta muerto o su ubicacion es desconocida');
  }else{
    console.log(data.name);
  }
}catch (error){
  console.log("Algo salio mal:",error.message);
}
}

busquedaSegura(1);
busquedaSegura(8);
busquedaSegura(19); */

/* async function compararUniversos(rickId, simpsonsId) {
  try {
    const [res1,res2] = await Promise.all([
      fetch('https://rickandmortyapi.com/api/character/1'),
      fetch('https://thesimpsonsapi.com/api/characters/1')
    ]);
    if (!res1.ok || !res2.ok){
      throw new Error(`URL`);
    }
    const[rick, simpson] = await Promise.all([
      res1.json(),
      res2.json()
    ])
    console.log(rick.name,' (',rick.species,', ', rick.status,')');
    console.log(simpson.name,' (',simpson.occupation,', ',simpson.status,')');
  } catch (error) {
    console.log("Error al comparar:", error.message);
  }
}

compararUniversos() */

/* async function primerLocalstorage(){
  localStorage.setItem("nombre", "Maxi Delfino");
  localStorage.setItem("edad", 22);
  let nombre = localStorage.getItem("nombre");
  let edad = localStorage.getItem("edad");
  console.log(nombre,edad);
  console.log(typeof edad);
  localStorage.removeItem("edad");
  console.log(localStorage.getItem("edad"));
  localStorage.clear();
}

primerLocalstorage(); */

/* async function guardandoObjetos(){
  const personaje = {
  nombre: "Homer Simpson",
  edad: 39,
  ocupacion: "Safety Inspector",
  frases: ["D'oh!", "Woo-hoo!"]
};
  localStorage.setItem("personaje",JSON.stringify(personaje));
  let auxiliar = localStorage.getItem("personaje")
  let personajeGuardado = JSON.parse(auxiliar);
  console.log(personajeGuardado.nombre);
  console.log("Frases: ",personajeGuardado.frases);
  let nuevaFrase = "Mmm... donuts";
  personaje.frases.push(nuevaFrase);
  localStorage.setItem("personaje",JSON.stringify(personaje));
  auxiliar = localStorage.getItem("personaje")
  personajeGuardado = JSON.parse(auxiliar);
  console.log(personajeGuardado.nombre);
  console.log("Frases: ",personajeGuardado.frases);
}

guardandoObjetos(); */

/* const personajes = []
g
async function obtenerConCache(id) {
  const clave = `personaje_${id}`;
  const guardado = localStorage.getItem(clave);
  if (guardado !== null ){
    const personajeParse = JSON.parse(guardado)
    console.log(`${personajeParse.name} fue recuperado de la cache`);
    return;
  }
  try {
    console.log("Buscando personaje (",id,") en la API");
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) {
      throw new Error("No se pudo obtener el personaje");
    };
    let auxiliar = await res.json();
    localStorage.setItem(clave, JSON.stringify(auxiliar));
    personajes.push(auxiliar);
    console.log(`${auxiliar.name} fue recuperado de la API y guardado en cache`);
  }catch (error){
    console.log("Error:", error.message);
  }
}
obtenerConCache(2);
obtenerConCache(1);
obtenerConCache(3);
obtenerConCache(4); */
