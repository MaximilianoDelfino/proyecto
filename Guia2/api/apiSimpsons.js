export async function RickMorty(){
    const urlSimpsons ='https://thesimpsonsapi.com/';
    return fetch(`${urlSimpsons}${endpoint}`)
        .then(response => response.json);
}