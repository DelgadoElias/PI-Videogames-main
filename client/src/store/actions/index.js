
import axios from 'axios'

// ----------------------------------------------------------------
// ..
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES'
export const FETCH_GENRES = 'FETCH_GENRES'


// ..
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES'

// ..
export const SORT_VIDEOGAMES = 'SORT_VIDEOGAMES'
export const SORT_RATING = 'SORT_RATING'

// ..
export const DB_FILTER = 'DB_FILTER'
export const GENRES_FILTER = 'GENRES_FILTER'


// ----------------------------------------------------------------

// Fetch/gets ..... ..... ..... ..... .....

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

export function fetchGenres(){
    return async function(dispatch) {
        try {
            let generos = await axios.get('http://localhost:3001/genres');
            dispatch({
            type: FETCH_GENRES,
            payload: generos.data
            })
        } catch (e) {
            console.log(e);
        }
    }
}


// Searches ..... ..... ..... ..... ..... .....

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


// Filtering ..... ..... ..... ..... ..... ..... ..... ....
// Only Db
export function dbFilter(type){
    return {
        type : DB_FILTER,
        payload : type
    }
}

// By genres.
export function genresFilter(type){
    return {
        type : GENRES_FILTER,
        payload : type
    }
}