const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then (data => {
    let tieneImagen = (imagen) => (imagen.image) !== "";
    let imagenes = data.results.every(tieneImagen);
    if (imagenes) {
        document.getElementById("resultado").innerHTML += `<p>✅ Todos los personajes tienen imagen</p>` 
    }else{   
        document.getElementById("resultado").innerHTML += `<p>⚠️ Hay personajes sin imagen</p>` 
    };
})