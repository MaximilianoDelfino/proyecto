fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

 .then(data => document.getElementById("resultado").innerHTML = data.results[0].name)   // toma el nombre del personaje en la primera posicion