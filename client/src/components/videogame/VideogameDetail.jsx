import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function VideogameDetail(props){
    
    // Componente presentacional
    // Fixed: No funciona el enrutamiento del id. No puedo ver esto en la pantalla grande...

    const [videogame, setVideogame ] = useState(null)

    let {id} = useParams()


    useEffect(() => {

        // Complete: Se como pasarlo a async. Prefiero mostrarlo mitad y mitad
        axios.get(`http://localhost:3001/videogame/${id}`).then((x) => {
            // ------------
            setVideogame(x.data);
            // ------------
        }).catch(e => console.log(e));
        
        // Se puede limpiar pero no lo veo necesario. Cuándo muere el componente también se va el estado.
        return () => { setVideogame(null); }

     }, []);




    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<> 

        {/* Ocupamos un ternario según el valor del componente --> Si es null escribimos 'loading' - Si no es null escribimos los valores del componente */}
        { 

        videogame ? <>
        <h1>{videogame.id}</h1>

        <p>{videogame.name}</p>

        <img src={videogame.background_image} alt={videogame.description} />
        <p>descripción:{videogame.description}</p>

        <p>{videogame.rating}</p>

        <p>{videogame.released}</p> 
                    </>  : <h1>Reloading</h1>
                    }

            {/* TODO: Botonera de Eliminar y actualizar el videogame.
            El get ya tenemos y el add va aparte. */}
    </>)
}