fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let tieneImagen = (imagen) => (imagen.image) !== "";    // revisa que el personaje tenga una imagen al revisar que el parametro donde iria el nombre del archivo no este vacio
    let imagenes = data.results.every(tieneImagen);     // registra todos los personajes que pasaron el chequeo
    if (imagenes) {     // imprime
        document.getElementById("resultado").innerHTML += `<p>✅ Todos los personajes tienen imagen</p>` 
    }else{   
        document.getElementById("resultado").innerHTML += `<p>⚠️ Hay personajes sin imagen</p>` 
    };
})