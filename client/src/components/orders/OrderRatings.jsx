// Ordenamiento de los videojuegos de menor a mayor

import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENTE } from "../../constantes/sort"
import { sortRating } from "../../store/actions"

// Me gusta más esta opción debido a que me gustaría tener un sideBar

export default function OrderRatings(){ // 5-1 -> 1-5

    // Cajita de variables -

        let dispatch = useDispatch();

        // Con esta función captaremos los cambios
        function onSelectedChange(e){
            // Todos los eventos tienen target.value?
            dispatch(sortRating(e.target.value));
        }


    return(
        <select name="select" className="button" onChange={onSelectedChange}>
            <option value="none">By rating...</option>
            <option value={ASCENDENTE}>Less Rating</option>
            <option value={DESCENTE}>More Rating</option>
        </select>
    )
}
