fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {    
  let primerosCinco = data.results.slice(0,5);      // corta el array a solo sus primeras 5 posiciones
  primerosCinco.forEach(data => {
  document.getElementById("resultado").innerHTML += `<p>${data.name}</p>`;
});
})