fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let boton = document.getElementById('botonPersonaje');
    boton.addEventListener('click',function(){
        let personajeBuscado = document.getElementById('personajeNombre').value.trim().toLowerCase();
        let encontrado = data.results.find(personajeNombre => personajeNombre.name.trim().toLowerCase() === personajeBuscado);
        if (encontrado === undefined) {
            document.getElementById("resultado").innerHTML = `<p> Personaje no encontrado </p>`;
        }else{
            document.getElementById("resultado").innerHTML = ` <p>El nombre del personaje es ${encontrado.name}, trabaja de ${encontrado.occupation} y tiene ${encontrado.age}.</p>`;
        };
    });
})