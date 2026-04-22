const boton = document.getElementById("boton")
fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})
// .then(data => document.getElementById("resultado").innerHTML = data.results[0].name)

// .then(data => {
//     let personajes = data.results.slice(0,5);
//     personajes.forEach(element => {
//         document.getElementById("resultado").innerHTML += `<p> ${element.name} - ${element.status} </p>`;
//     });
// })

// .then (data => {
//     let personajesVivos = data.results.filter(data => data.status === "Alive");
//     let cantidadVivos = personajesVivos.length;
//     document.getElementById("resultado").innerHTML += `<p> Personajes vivos en esta página: ${cantidadVivos} </p>`
//     personajesVivos.forEach(element => {
//        document.getElementById("resultado").innerHTML += `<p>${element.name} </p>`;
//     });
//  })

// .then (data => {
//     let personajesHumanos = data.results.filter(data => data.species == "Human");
//     personajesHumanos.forEach(element => {
//        document.getElementById("resultado").innerHTML += `<p>${element.name} - ${element.species} </p>`;
//     });
//  })

// boton?.addEventListener("click",function(){
//     let idPersonaje = Number(document.getElementById("personajeId").value);
//     fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
//     .then (response => {
//         if (response.ok === false){
//             throw new Error("El ID no fue encontrado");
//         }
//         return response.json();
//     })
//     .then (personaje => {
//         document.getElementById("resultado").innerHTML=`<img src="https://rickandmortyapi.com/api/character/avatar/${idPersonaje}.jpeg">
//         <p>${personaje.name} - ${personaje.species} - ${personaje.status}</p>`;
//     })
//     .catch(error =>{
//         document.getElementById("resultado").innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Windows_10_%26_11_BSOD_%28new_version%29.png" style="width: 500px;">
//         <p>No se encontró el personaje</p>`
//     })
// })

.then(data => {
    let ordenEpisodios = [...data.results].sort((a,b) => {
        let episodios1 = a.episode.length;
        let episodios2 = b.episode.length;
        return episodios2 - episodios1;
    });
    ordenEpisodios.forEach(personajes => {
        let cantEpisodios = personajes.episode.length;
        document.getElementById("resultado").innerHTML += `<p>${personajes.name} aparece en ${cantEpisodios} episodios</p>`
    })
})