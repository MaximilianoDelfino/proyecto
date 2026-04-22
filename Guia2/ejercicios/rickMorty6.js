const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let ordenEpisodios = [...data.results].sort((a,b) => {
        let episodios1 = a.episode.length;
        let episodios2 = b.episode.length;
        return episodios2 - episodios1;
    });
    ordenEpisodios.forEach(personajes => {
        let cantEpisodios = personajes.episode.length;
        document.getElementById("resultado").innerHTML += `<p>${personajes.name} aparece en ${cantEpisodios} episodios</p>`
    })
})