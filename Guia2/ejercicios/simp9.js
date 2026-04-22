fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let ochoPersonajes = data.results.slice(0,8);
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML="";
    ochoPersonajes.forEach(personajes =>{
        let edad = personajes.age || "Desconocida";
        let ocupacion = personajes.occupation || "Desempleado / Desconocida";
        contenedor.innerHTML += `
        <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block;">        
        <img src="https://cdn.thesimpsonsapi.com/200${personajes.portrait_path}">
        <h3>${personajes.name}</h3>
        <p>${edad}</p>
        <p>${ocupacion}</p>
        </div>`     // busca la imagen desde la API, le asigna un tamaño (obligatorio con esta api) y le asigna un diseño al marco
    })
})