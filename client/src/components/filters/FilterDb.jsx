// Ordenamiento de los videojuegos de menor a mayor

import { useDispatch, useSelector } from "react-redux"
import { dbFilter } from "../../store/actions"

// Me gusta más esta opción debido a que me gustaría tener un sideBar
        
// -----------------------------------------------
export default function FilterDb(){ // A-z -> Z-a

    // Cajita de variables .....
        let tf = false
        let texting = "Created by"
    // Variables para envíos .....
        let dispatch = useDispatch();

        
        // Con esta función captaremos los cambios
        function onClickChange(e){
            if(tf === true){
                tf = false;
                
            }else{
                tf = true;
                
            }   
            // Todos los eventos tienen target.value?
            dispatch(dbFilter(tf))
        }

// -----------------------------------------------

    return(
        <button className="button"onClick={onClickChange}>{texting}</button>
    )
}
