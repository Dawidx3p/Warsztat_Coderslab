const apiKey = '62e0928c';

export async function search(phrase){
    return fetch(`http://www.omdbapi.com/?s=${phrase}&apikey=${apiKey}`)
}

export async function getDetails(id){
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
}