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
    console.log(videogame);
    return (<> 

        {/* Ocupamos un ternario según el valor del componente --> Si es null escribimos 'loading' - Si no es null escribimos los valores del componente */}
        { 

        videogame ? <>
        {/* <h1>{videogame.id}</h1> */}

        <h1>{videogame.name}</h1>

        <img src={videogame.background_image} alt={videogame.name} />

        {/* TODO: Mostrarlo con expresiones regulares */}
        <h3>Descripción</h3>
        <p>{`${videogame.description_raw}`}</p>
        
        <h3>Rating:</h3>
        <p>{videogame.rating}</p>

        <h3>Géneros</h3>
        <ul>
            {videogame.genres.map((x) => { return <li>{x.name}</li>})}
        </ul>

            {/* TODO: Esto se puede linkear a cada plataforma. Extra Credit... */}
        <h3>Plataformas</h3>
        <ul>
            {videogame.platforms.map((x) => { return <li>{x.platform.name}</li>})}
        </ul>

        <h3>Lanzamiento:</h3>
        <p>{videogame.released}</p> 
                    </>  : <h1>Reloading</h1>
                    }

            {/* TODO: Botonera de Eliminar y actualizar el videogame.
            El get ya tenemos y el add va aparte. */}
    </>)
}