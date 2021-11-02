// Ordenamiento de los videojuegos de menor a mayor

import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENTE } from "../../constantes/sort"
import { sort } from "../../store/actions"

// Me gusta más esta opción debido a que me gustaría tener un sideBar

export default function Order(){ // A-z -> Z-a

    // Cajita de variables

    // Variables para envíos
        let dispatch = useDispatch();

        // Con esta función captaremos los cambios
        function onSelectedChange(e){
            // Todos los eventos tienen target.value?
            dispatch(sort(e.target.value))
        }


    return(
        <select name="select" onChange={onSelectedChange}>
            <option value="none">Seleccione...</option>
            <option value={ASCENDENTE}>Acendente</option>
            <option value={DESCENTE}>Descendente</option>
        </select>
    )
}
