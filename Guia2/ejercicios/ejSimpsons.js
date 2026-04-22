fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

// .then(data => document.getElementById("resultado").innerHTML = data.results[0].name)

.then(data => {    
  let primerosCinco = data.results.slice(0,5);
  primerosCinco.forEach(data => {
  document.getElementById("resultado").innerHTML += `<p>${data.name}</p>`;    
});
})

// .then(data => {
//     let mujer = data.results.filter(data => data.gender === "Female")
//    let cantidad = mujer.length;
//     document.getElementById("cantidad").innerHTML = 'la cantidad de personajes femeninos es ' + cantidad;
//     mujer.forEach(data => {
//         document.getElementById("resultado").innerHTML += `<p>${data.name}</p>`;    
//     });
// })

// .then(data => {    
//   let nombres = data.results;
//   nombres.forEach(data => {
//         document.getElementById("resultado").innerHTML += `<p>${data.name} --- ${data.occupation} </p>`;    
// });
// })

// .then(data => {
//     let masViejo = data.results.reduce((masViejo, current) => {
//         let viejo = parseInt(masViejo.age);
//         let actual = parseInt(current.age);
//         return viejo > actual ? masViejo : current;
//     });
//     document.getElementById("resultado").innerHTML = ` <p>El personaje mas viejo es ${masViejo.name} con ${masViejo.age} años.</p>`;
// })

// .then(data => {
//     let boton = document.getElementById('botonPersonaje');
//     boton.addEventListener('click',function(){
//         let personajeBuscado = document.getElementById('personajeNombre').value.trim().toLowerCase();
//         let encontrado = data.results.find(personajeNombre => personajeNombre.name.trim().toLowerCase() === personajeBuscado);
//         if (encontrado === undefined) {
//             document.getElementById("resultado").innerHTML = `<p> Personaje no encontrado </p>`;
//         }else{
//             document.getElementById("resultado").innerHTML = ` <p>El nombre del personaje es ${encontrado.name}, trabaja de ${encontrado.occupation} y tiene ${encontrado.age}.</p>`;
//         };
//     });
// })

// .then(data => {
//     let boton = document.getElementById('botonOficio');
//     boton.addEventListener('click', function(){
//         let ocupacionBuscada = document.getElementById('ocupacion').value.trim().toLowerCase();
//         let encontrado = personaje => personaje.occupation.trim().toLowerCase() === ocupacionBuscada;
//         let respuesta = data.results.some(encontrado);
//         if (respuesta === false) {
//             document.getElementById("resultado").innerHTML = `<p> No se encontró ninguno </p>`;
//         }else{
//             document.getElementById("resultado").innerHTML = ` <p> Sí, existe un personaje con esa ocupación</p>`;
//         };
//     });
// })

// .then(data =>{
//     let ordenadosEdad = [...data.results].sort((a,b) => {
//         let edad1 = parseInt(a.age);
//         let edad2 = parseInt(b.age);
//         return edad1 - edad2;
//     });
//     ordenadosEdad = ordenadosEdad.slice(0,5)
//     ordenadosEdad.forEach(personaje => {
//         document.getElementById("resultado").innerHTML += `<p>${personaje.name} - ${personaje.age}</p>`
//     })
// })

// .then(data => {
//     let ochoPersonajes = data.results.slice(0,8);
//     let contenedor = document.getElementById("resultado");
//     contenedor.innerHTML="";
//     ochoPersonajes.forEach(personajes =>{
//         let edad = personajes.age || "Desconocida";
//         let ocupacion = personajes.occupation || "Desempleado / Desconocida";
//         contenedor.innerHTML += `
//         <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block;">
//         <img src="https://cdn.thesimpsonsapi.com/200${personajes.portrait_path}">
//         <h3>${personajes.name}</h3>
//         <p>${edad}</p>
//         <p>${ocupacion}</p>
//         </div>`
//     })
// })

.then(data => {
    let hombres = data.results.reduce((conteo,personaje) => {
        if (personaje.gender === 'Male'){
            return conteo + 1;
        }else{
            return conteo;
        }
    }, 0)
    let mujeres = data.results.reduce((conteo,personaje) => {
        if (personaje.gender === 'Female'){
            return conteo + 1;
        }else{
            return conteo;
        }
    }, 0)
    document.getElementById("resultadoH").innerHTML=`<p>Personajes de genero masculino: ${hombres}</p>`
    document.getElementById("resultadoM").innerHTML=`<p>Personajes de genero femenino: ${mujeres}</p>`
})