fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let personajesVivos = data.results.filter(data => data.status === "Alive");     // filtra los personajes para que solo aquellos Alive (vivos) permanezcan en el array
    let cantidadVivos = personajesVivos.length;     // cuenta las posiciones del array para saber cuantos personajes vivos hay
    document.getElementById("resultado").innerHTML += `<p> Personajes vivos en esta página: ${cantidadVivos} </p>`   // muestra la cantidad de personajes vivos
    personajesVivos.forEach(element => {
       document.getElementById("resultado").innerHTML += `<p>${element.name} </p>`;     // nombra a los personajes vivos
    });
 })