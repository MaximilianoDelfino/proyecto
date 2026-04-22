fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let masViejo = data.results.reduce((masViejo, current) => {     // ordena los personajes de mayor a menor
        let viejo = parseInt(masViejo.age);
        let actual = parseInt(current.age);     
        return viejo > actual ? masViejo : current;
    });     
    document.getElementById("resultado").innerHTML = ` <p>El personaje mas viejo es ${masViejo.name} con ${masViejo.age} años.</p>`;
})