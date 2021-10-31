
import axios from 'axios'

// ----------------------------------------------------------------
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES'
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES'
export const SORT_VIDEOGAMES = 'SORT_VIDEOGAMES'
export const SORT_RATING = 'SORT_RATING'
// ----------------------------------------------------------------

// Traer a los videojuegos ..... ..... ..... ..... .....

export function fetchVideogames(){
    return async function(dispatch){
        try {
            let poder = await axios.get('http://localhost:3001/videogames') // Hacemos al backEnd nuestro
            dispatch({
            type: FETCH_VIDEOGAMES,
            payload: poder.data
            })
        } catch (e) {
            console.log(e)
        }
        
    }
}

// Buscar videojuegos ..... ..... ..... ..... ..... .....

export function searchVideogames(search, page = 1){
    return async function(dispatch){
        try {
            let poder = await axios.get(`http://localhost:3001/videogames?name=${search}&page=${page}`) // Hacemos al backEnd nuestro
            dispatch({
            type: SEARCH_VIDEOGAMES,
            payload: poder.data
            })
        } catch (e) {
            console.log(e)
        }
        
    }
}

// Ordenamientos ..... ..... ..... ..... ..... ..... .....

// Alfabético
export function sort(order){
    return {
        type : SORT_VIDEOGAMES,
        payload : order
        
    }
}

// Rating ----- ----- ----- -----
export function sortRating(order){
    return {
        type : SORT_RATING,
        payload : order
        
    }
}