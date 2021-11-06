import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function VideogameDetail(){
    
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


    //Complete: Decorarlo que está re feo - Está todo tirado así nomás
    return (<div className="container"> 

        {/* Ocupamos un ternario según el valor del componente --> Si es null escribimos 'loading' - Si no es null escribimos los valores del componente */}
        { 

        videogame ? <div className="">
            <br />
<Link to="/home">
        <button className="input padder">
          <h3>Back to Home</h3>
        </button>
      </Link>
        {/* <h1>{videogame.id}</h1> */}

        <h1>{videogame.name}</h1>

        <img className="container-image" src={videogame.background_image ? videogame.background_image : videogame.image } alt="imgNotFound" />

        <div className="mini-container justifier">
        <h3>Description</h3>
        <p>{`${videogame.description_raw ? videogame.description_raw : videogame.description}`}</p>
        
        <h3>Rating:</h3>
        <p>{videogame.rating}</p>

        <h3>Genres</h3>
        <ul>
            {videogame.genres.map((x) => { return <li>{x.name}</li>})}
        </ul>

            {/* EXTRA: Esto se puede linkear a cada plataforma. Extra Credit... */}
        <h3>Platforms supported</h3>
        <ul>
            {

            videogame.platforms.map((x) => {
                let av;
                if(videogame.id?.length > 8) {
                    av= x.name
                }else{
                    av= x.platform.name
                }

                return <li>{av}</li>})}
        </ul>

        <h3>Released:</h3>
        <p>{videogame.released}</p><br /></div>
                    </div>  : <h1>Reloading</h1>
                    }

            {/* EXTRA: Botonera de Eliminar y actualizar el videogame.
            El get ya tenemos y el add va aparte. */}
    </div>)
}