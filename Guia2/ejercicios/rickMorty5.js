const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})
boton?.addEventListener("click",function(){
    let idPersonaje = Number(document.getElementById("personajeId").value);
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
    .then(response =>{
        if (response.ok === false){
            throw new Error("El personaje no fue encontrado");
        }
        return response.json();
    })
    .then (personaje => {
        document.getElementById("resultado").innerHTML=`<img src="https://rickandmortyapi.com/api/character/avatar/${idPersonaje}.jpeg">
        <p>${personaje.name} - ${personaje.species} - ${personaje.status}</p>`;
    })
    .catch(error =>{
        document.getElementById("resultado").innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Windows_10_%26_11_BSOD_%28new_version%29.png" style="width: 500px;">
        <p>No se encontró el personaje</p>`
    })
})