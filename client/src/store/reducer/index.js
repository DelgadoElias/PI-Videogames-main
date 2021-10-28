import { ASCENDENTE, DESCENTE } from "../../constantes/sort";
import { FETCH_VIDEOGAMES, SEARCH_VIDEOGAMES, SORT_VIDEOGAMES } from "../actions";


const initialState = {
    videogames: [],
    filteredVideogames: [],
    platforms: [],
    genres: [],
}
// No es buena idea duplicar data front a back


export default function reducer(state = initialState, action){
    switch(action.type){

        // -------------------------------------
            case FETCH_VIDEOGAMES: 
                return {
                    ...state,
                    videogames: action.payload,
                    filteredVideogames: action.payload,
                }
            // -------------------------------------
            case SEARCH_VIDEOGAMES:
                return {
                    ...state,
                    filteredVideogames: action.payload,
                }
            // -------------------------------------
            case SORT_VIDEOGAMES:
            
                    let orderedVideogames = [...state.videogames]

                    // TODO: Cambiarlo a función como hicimos en el M1
                    orderedVideogames = state.videogames.sort((a,b) => {
                        
                        if(a.name < b.name) return action.payload === ASCENDENTE ? -1 : 1
                        
                        if(a.name > b.name) return action.payload === ASCENDENTE ? 1 : -1
                        return 0;
                    })
                    return {
                        ...state,
                        filteredVideogames: [...orderedVideogames]
                    }
        default: 
            return state;
    }
}