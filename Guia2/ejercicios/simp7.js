fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let boton = document.getElementById('botonOficio');
    boton.addEventListener('click', function(){
        let ocupacionBuscada = document.getElementById('ocupacion').value.trim().toLowerCase();
        let encontrado = personaje => personaje.occupation.trim().toLowerCase() === ocupacionBuscada;
        let respuesta = data.results.some(encontrado);      // some compara la ocupacion buscada en encontrado y devuelve si existe o no un personaje con ella
        if (respuesta === false) {
            document.getElementById("resultado").innerHTML = `<p> No se encontró ninguno </p>`;
        }else{
            document.getElementById("resultado").innerHTML = ` <p> Sí, existe un personaje con esa ocupación</p>`;
        };
    });
})