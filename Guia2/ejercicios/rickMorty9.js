fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let contEspecie = data.results.reduce((conteo,personaje) => {
        let especie = personaje.species;
        if (conteo[especie] === undefined){     // guarda el nombre de cualquier especie que no este ya registrada y le asigna un valor base de 0
            conteo[especie] = 0;
        }
        conteo[especie] += 1;       // suma 1 al contador si la especie ya esta registrada
        return conteo;
    }, {})
    for (let [especie,cantidad] of Object.entries(contEspecie)){        // separa las partes de contEspecie que necesitamos y las muestra en un bucle para verlas todas
        document.getElementById("resultado").innerHTML += `<p>${especie} - ${cantidad}</p>`
    }
})