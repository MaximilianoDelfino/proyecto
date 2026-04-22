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
        return episodios2 - episodios1;     // ordena los personajes con mas y menos episodios, contandolos con el .length
    });
    ordenEpisodios.forEach(personajes => {
        let cantEpisodios = personajes.episode.length;  // toma la cantidad de episodios del personaje actual
        document.getElementById("resultado").innerHTML += `<p>${personajes.name} aparece en ${cantEpisodios} episodios</p>`     // imprime la informacion del personaje
    })
})