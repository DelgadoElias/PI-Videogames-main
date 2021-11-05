// Filtro de los videojuegos según género

// ...Importaciones
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

// ...Constantes
import { NONE } from "../../constantes/filters";

// ...Actions 
import { fetchGenres, genresFilter } from "../../store/actions"



// --------------------------------------------------------------------
export default function FilterGenres(){ // Según género

    // TODO: Filtrar elementos según sus géneros asociados.

    // Cajita de variables

    // Variables para envíos
    let genre = useSelector((state) => { return state.genres });
    let dispatch = useDispatch();

    

    useEffect(() => {
        // --> mapDispatchToProps(). Levanto los géneros a la BD 
        dispatch(fetchGenres());
    },[]);









    // ..... ..... ..... ..... ..... ..... ..... .....
        // Captaremos cambios
        function onSelectedChange(e){
            e.preventDefault();
            
            // TODO: Filtrar por género de videojuego
            dispatch(genresFilter(e.target.value));
            
            // Despacho la opción sabiendo ya el valor que necesito
        }

        // FIXME: Muestra bien el select, cuándo llega el momento de filtrar solamente saca un valor del select y el resto se borra y se vuelve undefined.
    
    // ..... ..... ..... ..... ..... ..... ..... .....
    return(<>
        <label>Filtrar por género</label> 
        <select name="select" onChange={onSelectedChange}>
            <option key={NONE} value={NONE}>Todos</option>
            {genre?.map((x) => { 
                return <option key={x.name} value={x.name}>{x.name}</option> })}
        </select>
    </>);
}