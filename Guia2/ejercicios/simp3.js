fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let mujer = data.results.filter(data => data.gender === "Female")
   let cantidad = mujer.length;
    document.getElementById("cantidad").innerHTML = 'la cantidad de personajes femeninos es ' + cantidad;
    mujer.forEach(data => {
        document.getElementById("resultado").innerHTML += `<p>${data.name}</p>`;    
    });
})