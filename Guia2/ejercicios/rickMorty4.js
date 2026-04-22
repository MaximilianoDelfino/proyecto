fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let personajesHumanos = data.results.filter(data => data.species == "Human");   // filtra a los personajes humanos
    personajesHumanos.forEach(element => {
       document.getElementById("resultado").innerHTML += `<p>${element.name} - ${element.species} </p>`;    // muestra el nombre de todos los humanos y su especie
    });
 })