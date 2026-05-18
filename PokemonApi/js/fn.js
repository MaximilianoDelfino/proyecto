let n1 =1;
let n2 =1026;

async function traerPokemon1(min,max){
    const id = Math.floor(Math.random() * (max - min)) + min;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    const pokemon = await res.json();
    localStorage.setItem("pokemon1", JSON.stringify(pokemon));

    let aux = pokemon.name;
    let pokemonNom = aux.charAt(0).toUpperCase() + aux.slice(1);

    let contenedor = document.getElementById("pokemon1");

    contenedor.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
    <div id="pokemonNom1"> <p>${pokemonNom}</p> </div>
    <p>Ataque: ${pokemon.stats[1].base_stat}</p>
    <div id="defensa1"> <p>Defensa: ${pokemon.stats[2].base_stat}</p></div>`;
}

async function traerPokemon2(min,max){
    const id = Math.floor(Math.random() * (max - min)) + min;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    const pokemon = await res.json();
    localStorage.setItem("pokemon2", JSON.stringify(pokemon));

    let aux = pokemon.name;
    let pokemonNom = aux.charAt(0).toUpperCase() + aux.slice(1);

    let contenedor = document.getElementById("pokemon2");

    contenedor.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
    <div id="pokemonNom1"> <p>${pokemonNom}</p> </div>
    <p>Ataque: ${pokemon.stats[1].base_stat}</p>
    <div id="defensa2"> <p>Defensa: ${pokemon.stats[2].base_stat}</p></div>`;
}

document.addEventListener("DOMContentLoaded", async () => {
    await traerPokemon1(n1,n2);
    await traerPokemon2(n1,n2);

    let equipo1 = 6;
    let equipo2 = 6;

    const boton1 = document.getElementById("btn1");
    const boton2 = document.getElementById("btn2");

    let pokemonActual1 = JSON.parse(localStorage.getItem("pokemon1"));
    let pokemonActual2 = JSON.parse(localStorage.getItem("pokemon2"));

    let def1 = pokemonActual1.stats[2].base_stat;
    let def2 = pokemonActual2.stats[2].base_stat;

    let KOActual1 = 0;
    let KOActual2 = 0;

    let masKO1 = 0;
    let masKO2 = 0;

    let masKONom1 = "";
    let masKONom2 = "";

    boton1.addEventListener("click",() => {
        def2 = def2 - pokemonActual1.stats[1].base_stat;    
            if (def2 > 0){
                boton2.disabled = true;
                boton1.disabled = true;
                document.getElementById("defensa2").innerHTML = `<p>Defensa restante: ${def2}</p>`;
                document.getElementById("restantes2").innerHTML = `<p>Pokemones restantes: ${equipo2}`;

                boton2.disabled = false;
            }else{
                boton1.disabled = true;
                boton2.disabled = true;
                document.getElementById("defensa2").innerHTML = `<p>${pokemonActual2.name.charAt(0).toUpperCase() + pokemonActual2.name.slice(1)} fue derrotado!</p>`
                equipo2 = equipo2 - 1;
                document.getElementById("restantes2").innerHTML = `<p>Pokemones restantes: ${equipo2}`;
                KOActual1 = KOActual1 + 1;

                if (KOActual1 >= masKO1){
                    masKO1 = KOActual1;
                    masKONom1 = pokemonActual1.name;
                }

                if (equipo2 > 0){
                    setTimeout( async () => {
                        KOActual2 = 0;

                        await traerPokemon2(n1,n2);

                        pokemonActual2 = JSON.parse(localStorage.getItem("pokemon2"));
                        def2 = pokemonActual2.stats[2].base_stat;
                        boton2.disabled = false;
                    }, 1000);
                }else{
                    boton1.style.display="none";
                    boton2.style.display="none";
                    document.getElementById("restantes1").innerHTML = ``;
                    document.getElementById("restantes2").innerHTML = ``;
                    document.getElementById("pokemon1").innerHTML = `<p>Gano el equipo 1!</p>
                    <p>El pokemon con más KO fue ${masKONom1.charAt(0).toUpperCase() + masKONom1.slice(1)} habiendo derrotado a ${masKO1} pokemones rivales!</p>`;
                    document.getElementById("pokemon2").innerHTML = ``;
                }
            }
    })
    boton2.addEventListener("click",() => {
        def1 = def1 - pokemonActual2.stats[1].base_stat;
        
            if (def1 > 0){
                boton2.disabled = true;
                boton1.disabled = true;
                document.getElementById("defensa1").innerHTML = `<p>Defensa restante: ${def1}</p>`;
                document.getElementById("restantes1").innerHTML = `<p>Pokemones restantes: ${equipo1}`;

                boton1.disabled = false;
            }else{
                boton2.disabled = true;
                boton1.disabled = true;
                document.getElementById("defensa1").innerHTML = `<p>${pokemonActual1.name.charAt(0).toUpperCase() + pokemonActual1.name.slice(1)} fue derrotado!</p>`
                equipo1 = equipo1 - 1;
                document.getElementById("restantes1").innerHTML = `<p>Pokemones restantes: ${equipo1}`;
                KOActual2 = KOActual2 + 1;

                if (KOActual2 >= masKO2){
                    masKO2 = KOActual2;
                    masKONom2 = pokemonActual2.name;
                }

                if (equipo1 > 0){
                    setTimeout( async () => {
                        KOActual1 = 0;

                        await traerPokemon1(n1,n2);

                        pokemonActual1 = JSON.parse(localStorage.getItem("pokemon1"));
                        def1 = pokemonActual1.stats[2].base_stat;
                        boton1.disabled = false;
                    }, 1000);
                }else{
                    boton1.style.display="none";
                    boton2.style.display="none";
                    
                    document.getElementById("restantes1").innerHTML = ``;
                    document.getElementById("restantes2").innerHTML = ``;
                    document.getElementById("pokemon1").innerHTML = ``;
                    document.getElementById("pokemon2").innerHTML = `<p>Gano el equipo 1!</p>
                    <p>El pokemon con más KO fue ${masKONom2.charAt(0).toUpperCase() + masKONom2.slice(1)} habiendo derrotado a ${masKO2} pokemones rivales!</p>`;
                }
            }
    })
})