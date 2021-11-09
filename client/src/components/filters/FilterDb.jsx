// Ordenamiento de los videojuegos de menor a mayor

import { useDispatch } from "react-redux"
import { dbFilter } from "../../store/actions"
        
// -----------------------------------------------
export default function FilterDb(){ // A-z -> Z-a

    // Cajita de variables .....
        let tf = false
        let texting = "Created by"
    // Variables para envíos .....
        let dispatch = useDispatch();

        
        // Con esta función captaremos los cambios
        function onClickChange(){
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
