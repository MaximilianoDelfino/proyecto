fetch("https://rickandmortyapi.com/api/character") // llama a la api
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => document.getElementById("resultado").innerHTML = data.results[0].name)    // busca el personaje en la posicion 0 (primera), luego lo muestra