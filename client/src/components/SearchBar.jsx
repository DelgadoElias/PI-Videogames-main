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
        setSearch('')
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
        <form className={vStyles.searchFormContainer} onSubmit={onSubmit}>
            <input className={vStyles.searchText} type="text" onChange={onInputChange} value={search} placeholder="...Search by game title"/>
            <label className={vStyles.searchInputContainer}>
            <input type="submit" className={`${vStyles.button}`} value="Search" />
            <svg className={vStyles.searchButtonSvg} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </label>

        </form>
    </>);
}