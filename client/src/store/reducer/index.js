import { FETCH_VIDEOGAMES } from "../actions";


const initialState = {
    videogames: [],
    platforms: [],
    genres: [],
}
// No es buena idea duplicar data front a back


export default function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
            }
        default: 
            return state;
    }
}