fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let personajes = data.results.slice(0,5);   // recorta el array a solo las primeras 5 posiciones
    personajes.forEach(element => {
        document.getElementById("resultado").innerHTML += `<p> ${element.name} - ${element.status} </p>`;   // muestra el nombre y estado de los primeros 5 personajes
    });
})