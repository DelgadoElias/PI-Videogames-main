import reducer from './index'
import {initialState} from './index'

// Acciones
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

  import {fetchVideogames} from "../actions"

  

describe('reducer', () => {
    // Initial State ?
    it('Debería devolver el estado inicial', () => {
      expect(reducer(undefined, {})).toMatchSnapshot()
    })

    it('Debería traer los videojuegos cuando llamamos a fetchVideogames', () => {
        // fijarse bien las propiedades que tiene que recibir.
        expect(reducer(initialState, fetchVideogames())).toHaveProperty('videogames',[]);
        console.log(reducer(initialState, fetchVideogames()));

    });

  })