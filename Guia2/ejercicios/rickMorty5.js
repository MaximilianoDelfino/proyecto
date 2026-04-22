const boton = document.getElementById("boton")      // registra el boton del html
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})
boton?.addEventListener("click",function(){     // revisa que el boton haya sido presionado antes de ejecutar la funcion
    let idPersonaje = Number(document.getElementById("personajeId").value);     // toma lo que se escribio en el input, lo transforma en un valor y luego transforma ese valor de string a un numero
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
    .then(response =>{
        if (response.ok === false){
            throw new Error("El personaje no fue encontrado");      // genera una respuesta en caso de error
        }
        return response.json();     // devuelve el json para poder seguir trabajando con la api mas abajo
    })
    .then (personaje => {
        document.getElementById("resultado").innerHTML=`<img src="https://rickandmortyapi.com/api/character/avatar/${idPersonaje}.jpeg">        
        <p>${personaje.name} - ${personaje.species} - ${personaje.status}</p>`;     // usa la id que conseguimos antes para buscar con la URL la foto del personaje, luego escribe sus datos
    })
    .catch(error =>{
        document.getElementById("resultado").innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Windows_10_%26_11_BSOD_%28new_version%29.png" style="width: 500px;">    
        <p>No se encontró el personaje</p>`     // tira el mensaje de error sí la ID recibida no es válida
    })
})