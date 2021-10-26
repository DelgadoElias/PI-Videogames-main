
import axios from 'axios'

// ----------------------------------------------------------------
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES'

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

export function searchVideogames(){
    
}