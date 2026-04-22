const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let personajes = data.results.slice(0,5);
    personajes.forEach(element => {
        document.getElementById("resultado").innerHTML += `<p> ${element.name} - ${element.status} </p>`;
    });
})