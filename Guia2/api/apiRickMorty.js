export async function RickMorty(){
    const urlRickMorty ='https://rickandmortyapi.com/';
    return fetch(`${urlRickMorty}${endpoint}`)
        .then(response => response.json);
}