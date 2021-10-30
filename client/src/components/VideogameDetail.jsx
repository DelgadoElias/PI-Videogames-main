import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function VideogameDetail(props){
    
    // Componente presentacional
    // FIXME: No funciona el enrutamiento del id. No puedo ver esto en la pantalla grande...

    const [videogame, setVideogame ] = useState(null)

    let parametros = useParams()


    console.log(parametros);


    useEffect(() => {
        axios.get('http://localhost:3001/videogame/412520')
     }, []);




    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<> 

        { 
        videogame ? <>
        <h1>{videogame.id}</h1>

        <p>{videogame.name}</p>

        <img src={videogame.image} alt={videogame.description} />
        <p>descripción:{videogame.description}</p>

        <p>{videogame.rating}</p>

        <p>{videogame.released}</p> 
                    </>  : <h1>Reloading</h1>
                    }

    
    </>)
}