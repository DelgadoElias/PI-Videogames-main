// Ordenamiento de los videojuegos de menor a mayor

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENTE } from "../constantes/sort"
import { sort } from "../store/actions"

// Me gusta más esta opción debido a que me gustaría tener un sideBar

export default function Order(){

    // Cajita de variables
        let dispatch = useDispatch()

        const [order, setOrder] = useState('')
        
        useEffect(() => {
            dispatch(sort(order))
         },[order])



        // Con esta función captaremos los cambios
        function onSelectedChange(e){
            // Todos los eventos tienen target.value?
            setOrder(e.target.value)
        }


    return(
        <select name="select" onChange={onSelectedChange}>
            <option value={ASCENDENTE}>Mayor a menor</option>
            <option value={DESCENTE}>Menor a mayor</option>
        </select>
    )
}
