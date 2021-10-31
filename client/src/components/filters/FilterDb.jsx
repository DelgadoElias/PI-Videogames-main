// Ordenamiento de los videojuegos de menor a mayor

import { useDispatch } from "react-redux"
import { dbFilter } from "../../store/actions"

// Me gusta más esta opción debido a que me gustaría tener un sideBar

export default function FilterDb(){ // A-z -> Z-a


    // FIXME: No anda pos
    // TODO: Generar una ruta en mi dataBase donde solamente agarre las cosas de mi base de datos y las devuelvo en una dirección. Entonces no tengo que estar jodiendo con filtros ni nada por el estilo.

    // Cajita de variables
        let tf = true
        let texting = "Creados"
    // Variables para envíos
        let dispatch = useDispatch();

        // Con esta función captaremos los cambios
        function onClickChange(e){
            e.preventDefault();
            tf = !tf;

            if(tf === true){
                texting = "Creados"
            }else{
                texting = "Todos"
            }

            // Todos los eventos tienen target.value?
            dispatch(dbFilter(tf))
        }


    return(
        <button onClick={onClickChange}>{texting}</button>
    )
}
