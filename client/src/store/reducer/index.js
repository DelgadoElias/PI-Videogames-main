import { NONE } from "../../constantes/filters";
import { ASCENDENTE } from "../../constantes/sort";
import {
  DB_FILTER,
  FETCH_GENRES,
  FETCH_PLATFORMS,
  FETCH_VIDEOGAMES,
  GENRES_FILTER,
  PLATFORMS_FILTER,
  SEARCH_VIDEOGAMES,
  SORT_RATING,
  SORT_VIDEOGAMES,
} from "../actions";

const initialState = {
  videogames: [],
  filteredVideogames: [],
  platforms: [],
  genres: [],
  filteredGenres: [],
  filteredPlatforms: [],
  backup: [],
};

// No es buena idea duplicar data front a back

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // **************************************************************************************************
    // -------------------------------------
    case FETCH_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filteredVideogames: action.payload,
        backup : [...state.filteredVideogames]
      };
    // -------------------------------------
      case FETCH_GENRES:
        return {
          ...state,
          genres: action.payload,
          filteredGenres: action.payload
        };

    // -------------------------------------
    case FETCH_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
        filteredPlatforms: action.payload
      };

    // **************************************************************************************************
    // -------------------------------------
    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        filteredVideogames: action.payload,
      };

    // **************************************************************************************************
    // -------------------------------------
    case SORT_VIDEOGAMES:
      let orderedVideogames = [...state.videogames];

      // Optional: Cambiarlo a función como hicimos en el M1
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

    // **************************************************************************************************
    // -------------------------------------
      case DB_FILTER:
        
        if(action.payload === true){
          let filteredItems = state.filteredVideogames.filter((x) => {return x.hasOwnProperty('createdInDb')}
          );
          // ..... ..... ..... .....
          return {
            ...state,
            backup : [...state.filteredVideogames],
            filteredVideogames : [...filteredItems]
          }
        }else{ 
          // ..... ..... ..... .....
          return { // Si no es lo volvemos a setear
            ...state,
            filteredVideogames : [...state.backup]
          }
        }
        // Complete: Si hacemos primero una búsqueda, el debe hacer que coincida con ambos, con la búsqueda y la DB

    // -------------------------------------
        case GENRES_FILTER:

          if(action.payload === NONE){
            return {
              ...state,
              filteredVideogames : [...state.videogames]
            }
          }else{ // Caso contrario, tenemos un género
            let filterByGenre = state.videogames.filter((x) => {
              
              // Revisamos el array.
              for(let i = 0; i < x.genres.length; i++) {
                if(x.genres[i].name === action.payload){
                  return true;
                }
              }
              // Si no lo encontramos en el array no hay nada
              return false; 
              
            });
            // ..... Finalización filter .....
            return {
              ...state,
              filteredVideogames: [...filterByGenre]
            }
          }
          
        // -------------------------------------

          case PLATFORMS_FILTER:

          if(action.payload === NONE){
            return {
              ...state,
              filteredVideogames : [...state.videogames]
            }
          }else{ 
            let filterByPlatform = state.videogames.filter((x) => {

              // Revisamos el array.
              for(let i = 0; i < x.platforms.length; i++) {
                let consta = x.platforms[i].platform ? x.platforms[i].platform.name : x.platforms[i].name 
                if(consta === action.payload){
                  return true;
                }
              }
              return false; 
              
            });
            // ..... Finalización filter .....
            return {
              ...state,
              filteredVideogames: [...filterByPlatform]
            }
          }

    // **************************************************************************************************
    // -------------------------------------
    // -------------------------------------
    
    default:
      return state;
  }
}
