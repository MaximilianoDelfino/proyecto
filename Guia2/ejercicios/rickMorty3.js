const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let personajesVivos = data.results.filter(data => data.status === "Alive");
    let cantidadVivos = personajesVivos.length;
    document.getElementById("resultado").innerHTML += `<p> Personajes vivos en esta página: ${cantidadVivos} </p>`
    personajesVivos.forEach(element => {
       document.getElementById("resultado").innerHTML += `<p>${element.name} </p>`;
    });
 })