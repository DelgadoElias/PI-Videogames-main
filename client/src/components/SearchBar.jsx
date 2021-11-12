// React
import {useState} from 'react'
import {useDispatch} from 'react-redux'

// Acciones
import { searchVideogames } from '../store/actions';

import vStyles from '../assets/styles/search.module.css'

// --------------------------------------------
export default function SearchBar(){

    // --------------------------------------------
    // Funciones de react para actualizar el estado de la aplicación
    let [search, setSearch] = useState('');
    // Envío de la información
    let dispatch = useDispatch();
    // --------------------------------------------

    // --------------------------------------------
    // onSubmit -->  Carga la palabra que buscamos al action function para obtener la info del reducer
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchVideogames(search));
    }
    // --------------------------------------------

    // --------------------------------------------
    // onInputChange --> Controla los cambios accionados
    function onInputChange(e){
        e.preventDefault();
        // useState del search?
        setSearch(e.target.value);
        
    }
    // --------------------------------------------

    // --------------------------------------------
    // Formulario a usar para el navBar
    return(<>
        <form onSubmit={onSubmit}>
            <input className={vStyles.searchText} type="text" onChange={onInputChange} value={search} placeholder="...Search Here"/>
            <input type="submit" className={`${vStyles.button} ${vStyles.search}`}value="Search" />

        </form>
    </>);
}