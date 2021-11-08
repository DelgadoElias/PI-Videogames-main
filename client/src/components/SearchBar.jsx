// React
import {useState} from 'react'
import {useDispatch} from 'react-redux'

// Acciones
import { searchVideogames } from '../store/actions';


// --------------------------------------------
export default function SearchBar(){

    // --------------------------------------------
    // Funciones de react para actualizar el estado de la aplicación
    let [search, setSearch] = useState('');
    // Envío de la información
    let dispatch = useDispatch();
    // --------------------------------------------
    //TODO: Si me trae más de 15 juegos lo voy a filtrar
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
            <input className="search-text" type="text" onChange={onInputChange} value={search} placeholder="..."/>
            <input type="submit" className="button search"value="Search" />

        </form>
    </>);
}