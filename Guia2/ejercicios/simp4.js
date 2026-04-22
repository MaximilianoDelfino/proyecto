fetch("https://thesimpsonsapi.com/api/characters")
.then(Response => Response.json())
.then(data => {
    console.log(data);
    return data;
})

.then(data => {    
  let nombres = data.results;
  nombres.forEach(data => {
        document.getElementById("resultado").innerHTML += `<p>${data.name} --- ${data.occupation} </p>`;    
});
})