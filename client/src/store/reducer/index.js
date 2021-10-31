import { ASCENDENTE } from "../../constantes/sort";
import {
  DB_FILTER,
  FETCH_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
  SORT_RATING,
  SORT_VIDEOGAMES,
} from "../actions";

const initialState = {
  videogames: [],
  filteredVideogames: [],
  platforms: [],
  genres: [],
  database: [],
};

// No es buena idea duplicar data front a back

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // -------------------------------------
    case FETCH_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filteredVideogames: action.payload,
      };
    // -------------------------------------
    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        filteredVideogames: action.payload,
      };
    // -------------------------------------
    case SORT_VIDEOGAMES:
      let orderedVideogames = [...state.videogames];

      // TODO: Cambiarlo a función como hicimos en el M1
      orderedVideogames = state.videogames.sort((a, b) => {
        if (a.name < b.name) return action.payload === ASCENDENTE ? -1 : 1;

        if (a.name > b.name) return action.payload === ASCENDENTE ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        filteredVideogames: [...orderedVideogames],
      };
    // -------------------------------------
    case SORT_RATING:
      let orderedRatings = [...state.videogames];

      // Este lo dejamos así nomás, demostramos usar todos los métodos
      orderedRatings = state.videogames.sort((a, b) => {
        if (a.rating < b.rating) return action.payload === ASCENDENTE ? -1 : 1;

        if (a.rating > b.rating) return action.payload === ASCENDENTE ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        filteredVideogames: [...orderedRatings],
      };
    // -------------------------------------
      case DB_FILTER:

        if(action.payload === true){
          let filteredItems = state.videogames.filter((x) => x.createdInDb === true)
  
          return {
            ...state,
            database : [...filteredItems]
          }
        }else{
          return { // ¿Así sería?
            ...state
          }
        }

    // -------------------------------------
    default:
      return state;
  }
}
