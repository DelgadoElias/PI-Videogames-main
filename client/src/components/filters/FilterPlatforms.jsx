// Filtro de los videojuegos según Plataformas

// ...Importaciones
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

// ...Constantes
import { NONE } from "../../constantes/filters";

// ...Actions 
import { fetchPlatforms, platformsFilter } from "../../store/actions"



// --------------------------------------------------------------------
export default function FilterPlatforms(){ // Según plataforma

    // Cajita de variables
    let platforms = useSelector((state) => { return state.platforms });
    let dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(fetchPlatforms());
    },[]);


    // ..... ..... ..... ..... ..... ..... ..... .....
        // Captaremos cambios
        function onSelectedChange(e){
            e.preventDefault();
            
            dispatch(platformsFilter(e.target.value));  
        }
    
    // ..... ..... ..... ..... ..... ..... ..... .....
    return(<> 
        <select className="button" name="select" onChange={onSelectedChange}>
            <option key={NONE} value={NONE}>Filter by Platforms</option>
            {platforms?.map((x) => { 
                return <option key={x.name} value={x.name}>{x.name}</option> })}
        </select>
    </>);
}