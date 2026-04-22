const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

boton?.addEventListener("click",function(){
    let nombrePersonaje = document.getElementById("personajeNombre").value;
    fetch(`https://rickandmortyapi.com/api/character?name=${nombrePersonaje}`)
    .then(respuesta => respuesta.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = "";
        data.results.forEach(element => {
            let personajeId = element.id;
            document.getElementById("resultado").innerHTML += `<img src="https://rickandmortyapi.com/api/character/avatar/${personajeId}.jpeg">
            <p>${nombrePersonaje} - ${element.status}</p>`
        });
    })
});