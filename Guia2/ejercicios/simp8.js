fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data =>{
    let ordenadosEdad = [...data.results].sort((a,b) => {       // ordena por edad 
        let edad1 = parseInt(a.age);        // parseInt toma la edad y la convierte en un numero de manera mas flexible que Number, ignora lo que no sea un numero
        let edad2 = parseInt(b.age);
        return edad1 - edad2;
    });
    ordenadosEdad = ordenadosEdad.slice(0,5)
    ordenadosEdad.forEach(personaje => {
        document.getElementById("resultado").innerHTML += `<p>${personaje.name} - ${personaje.age}</p>`
    })
})