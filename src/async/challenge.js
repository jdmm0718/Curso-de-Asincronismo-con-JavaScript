const fetchData = require('../utils/fetchdata');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        
        const data = await (await fetch(url_api)).json();
        const character = await (await fetch(`${API}${data.results[0].id}`)).json();
        const origin = await (await fetch(character.origin.url)).json()

        console.log((data.info.count))
        console.log(character.name)
        console.log(origin.dimension)

    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')