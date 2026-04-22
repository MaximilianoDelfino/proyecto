const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let contEspecie = data.results.reduce((conteo,personaje) => {
        let especie = personaje.species;
        if (conteo[especie] === undefined){
            conteo[especie] = 0;
        }
        conteo[especie] += 1;
        return conteo;
    }, {})
    for (let [especie,cantidad] of Object.entries(contEspecie)){
        document.getElementById("resultado").innerHTML += `<p>${especie} - ${cantidad}</p>`
    }
})