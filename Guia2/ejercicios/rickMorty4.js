const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let personajesHumanos = data.results.filter(data => data.species == "Human");
    personajesHumanos.forEach(element => {
       document.getElementById("resultado").innerHTML += `<p>${element.name} - ${element.species} </p>`;
    });
 })