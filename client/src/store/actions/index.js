
import axios from 'axios'

// ----------------------------------------------------------------
// ..
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES'
export const FETCH_GENRES = 'FETCH_GENRES'
export const FETCH_PLATFORMS = 'FETCH_PLATFORMS'

// ..
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES'

// ..
export const SORT_VIDEOGAMES = 'SORT_VIDEOGAMES'
export const SORT_RATING = 'SORT_RATING'

// ..
export const DB_FILTER = 'DB_FILTER'
export const API_FILTER = 'API_FILTER'
export const GENRES_FILTER = 'GENRES_FILTER'
export const PLATFORMS_FILTER = 'PLATFORMS_FILTER'


// ..
export const POST_VIDEOGAME = 'POST_VIDEOGAME'

// ----------------------------------------------------------------
export const GAME_RANDOM = 'GAME_RANDOM'
export const RESET_GAMES = 'RESET_GAMES'


// ----------------------------------------------------------------

// Fetch/gets ..... ..... ..... ..... .....

// Videogames
export function fetchVideogames(){
    return async function(dispatch){
        try {
            let poder = await axios.get('http://localhost:3009/videogames') // Hacemos al backEnd nuestro
            dispatch({
            type: FETCH_VIDEOGAMES,
            payload: poder.data
            })
        } catch (e) {
            console.log(e)
        }
        
    }
}

// Géneros
export function fetchGenres(){
    return async function(dispatch) {
        try {
            let generos = await axios.get('http://localhost:3009/genres');
            dispatch({
            type: FETCH_GENRES,
            payload: generos.data
            })
        } catch (e) {
            console.log(e);
        }
    }
}

// Plataformas
export function fetchPlatforms(){
    return async function(dispatch) {
        try {
            let plataformas = await axios.get('http://localhost:3009/platforms');
            dispatch({
            type: FETCH_PLATFORMS,
            payload: plataformas.data
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
            let poder = await axios.get(`http://localhost:3009/videogames?name=${search}&page=${page}`) // Hacemos al backEnd nuestro
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

// By platforms.
export function platformsFilter(type){
    return {
        type : PLATFORMS_FILTER,
        payload : type
    }
}

// By API
export function apiFilter(type){
    return {
        type: API_FILTER,
        payload : type
    }
}

// Extras ..... ..... ..... ..... ..... ..... ..... ..... 

// Pick a random game and render in the page
export function gameRandom(){
    return {
        type: GAME_RANDOM,
        payload: "none"
    }
}

// Reset videogame cards

export function resetGames(){
    return {
        type: RESET_GAMES,
        payload: "none"
    }
}