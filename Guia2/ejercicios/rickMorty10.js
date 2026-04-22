fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let totalPersonajes = data.results.length;
    let pVivos = data.results.filter(data => data.status === "Alive");
    let pMuertos = data.results.filter(data => data.status === "Dead");
    let pDesconocidos = data.results.filter(data => data.status === "unknown");
    let cantVivos = pVivos.length;
    let cantMuertos = pMuertos.length;
    let cantDesconocidos = pDesconocidos.length;
    let ordenEpisodios = [...data.results].sort((a,b) => {
        let episodios1 = a.episode.length;
        let episodios2 = b.episode.length;
        return episodios2 - episodios1;
    });
    let masEpi = ordenEpisodios[0];
    let menosEpi = ordenEpisodios[ordenEpisodios.length - 1];
    let especies = data.results.map(personaje => personaje.species);    // toma las especies de la primera pagina de la api
    let especiesDistintas = [...new Set(especies)];     //  remueve todos los duplicados para poder mostrar solo una linea de texto por especie
    document.getElementById("resultado").innerHTML += `
    <p> Total de personajes en esta página: ${totalPersonajes} </p>
    <br>
    <p> Personajes vivos en esta página: ${cantVivos} </p>
    <br>
    <p> Personajes vivos en esta página: ${cantMuertos} </p>
    <br>
    <p> Personajes vivos en esta página: ${cantDesconocidos} </p>
    <br>
    <p> Personaje con más episodios aparecio en ${masEpi.episode.length} ${masEpi.name} </p>
    <br>
    <p> Personaje con menos episodios apareció en ${menosEpi.episode.length} y fue ${menosEpi.name} </p>
    <br>
    <p> Todos ellos pertenecen a una de las siguientes especies: ${especiesDistintas.join(", ")} </p>
    `
 })