fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {
    let hombres = data.results.reduce((conteo,personaje) => {
        if (personaje.gender === 'Male'){       // cuenta cuantos personajes de genero "male" hay
            return conteo + 1;
        }else{
            return conteo;
        }
    }, 0)
    let mujeres = data.results.reduce((conteo,personaje) => {
        if (personaje.gender === 'Female'){     // cuenta cuantos personajes de genero "male" hay
            return conteo + 1;
        }else{
            return conteo;
        }
    }, 0)
    document.getElementById("resultadoH").innerHTML=`<p>Personajes de genero masculino: ${hombres}</p>`
    document.getElementById("resultadoM").innerHTML=`<p>Personajes de genero femenino: ${mujeres}</p>`
})