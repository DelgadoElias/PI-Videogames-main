// Ordenamiento de los videojuegos de menor a mayor

import { useDispatch, useSelector } from "react-redux"
import { dbFilter } from "../../store/actions"

// Me gusta más esta opción debido a que me gustaría tener un sideBar

export default function FilterDb(){ // A-z -> Z-a



    // FIXME: No anda pos . El problema está acá
    // TODO: Generar una ruta en mi dataBase donde solamente agarre las cosas de mi base de datos y las devuelvo en una dirección. Entonces no tengo que estar jodiendo con filtros ni nada por el estilo.

    let videogame = useSelector((state) => { return state.database});


    // Cajita de variables
        let tf = false
        let texting = "Creados"
    // Variables para envíos
        let dispatch = useDispatch();

        
        // Con esta función captaremos los cambios
        function onClickChange(e){
            console.log('Me cliquean');
            console.log(e);

            if(tf === true){
                tf = false;
                texting = "Creados"
            }else{
                tf = true;
                texting = "Todos"
            }   
            // Todos los eventos tienen target.value?
            dispatch(dbFilter(tf))
        }


    return(
        <button onClick={onClickChange}>{texting}</button>
    )
}
