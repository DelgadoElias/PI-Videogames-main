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



    // Cajita de variables

    // -------------------------------
    let genre = useSelector((state) => { return state.genres });
    // -------------------------------
    let dispatch = useDispatch();
    // -------------------------------
    
    // ------------------------------------------
    useEffect(() => {
        // --> mapDispatchToProps(). Levanto los géneros a la BD 
        dispatch(fetchGenres());
    },[]);
    // ------------------------------------------

    // ..... ..... ..... ..... ..... ..... ..... .....
        // Captaremos cambios
        function onSelectedChange(e){
            e.preventDefault();
            
            // Complete: Filtrar por género de videojuego
            dispatch(genresFilter(e.target.value));
            
            // Despacho la opción sabiendo ya el valor que necesito
        }


    // ..... ..... ..... ..... ..... ..... ..... .....
    return(<>
        <select className="button" name="select" onChange={onSelectedChange}>
            <option key={NONE} value={NONE}>Filter by Genres</option>
            {genre?.map((x) => { 
                return <option key={x.name} value={x.name}>{x.name}</option> })}
        </select>
    </>);
}