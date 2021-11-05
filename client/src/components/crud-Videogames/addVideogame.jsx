
// Cambiable
import axios from "axios";

// Importaciones
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Actions necesarias
import { fetchGenres, fetchPlatforms } from "../../store/actions";

// Enrutamiento
import { Link } from 'react-router-dom';


export default function AddVideogame(){
    
    // Cajita de variables
    const generos = useSelector((state) => state.genres);
    //.
    const plataformas = useSelector((state) => state.platforms);
    //.
    const dispatch = useDispatch()
    //.
    let history = useHistory();
    //.
    const [videogame, setVideogame] = useState({
        name: "",
        description: "",
        image: "",
        rating: 0,
        released: "",
        genres: [],
        platforms: [],
    }); // Lo que necesita nuestro videojuego en el estado local
    
    // Comenzamos con la codificación ..... ..... ..... .....
    useEffect(() => {

        // Nos traemos los géneros y las plataformas por si acaso.
        dispatch(fetchGenres());
        dispatch(fetchPlatforms());
    },[]);
    // NO TE OLVIDES EL MALDITO ARRAY DE DEPENDENCIAS




    // Captame los cambios del formulario
    function onInputChange(e){
        e.preventDefault();
        setVideogame({
            ...videogame,
            [e.target.name] : e.target.value
        });
    }

    // TODO: Captame los cambios del checkbox nomás
    function handleCheckbox(e){

    }


    // ---------------------------------------------
    // ..... Levantamos las cosas .....
    async function onSubmit(e){
        e.preventDefault();
        
        // NOTE: Podés modularizar esto la verdad
        axios.post('http://localhost:3001/videogame/',videogame).then(() => {
            history.push('/')
        }).catch((err) => {console.log(err);})
        
    }

        {/* ..... Formulario requerido ..... */}
    return (<>

        <Link to="/home">
            <button className="button"><h3>Volver</h3></button>
        </Link>

    <form onSubmit={onSubmit}>

        <h1>Crear personaje</h1>

        <ul>
            <li>
        {/* ..... Nombre ..... */}
        <label htmlFor="">Nombre:</label>
        <input onChange={onInputChange} name="name" type="text" value={videogame.name}/>
            </li>
            <li>
        {/* ..... Descripción ..... */}
        <label htmlFor="">Descripción:</label>
        <input onChange={onInputChange} name="description" type="text" value={videogame.description} />
            </li>
            <li>
        {/* ..... Imágen URL ..... */}
        <label htmlFor="">Imágen:</label>
        <input onChange={onInputChange} name="image" type="text" value={videogame.image} />
            </li>
            <li>
        {/* ..... Rating ..... */}
        <label htmlFor="">Rating:</label>
        <input onChange={onInputChange} name="rating" type="number" value={videogame.rating} />
            </li>
            <li>
        {/* ..... Released ..... */}
        <label htmlFor="">Lanzamiento:</label>
        <input onChange={onInputChange} name="released" type="text" value={videogame.released} />
            </li>

        <li>Géneros</li>

        <li>
        {/* ..... Géneros ..... */}
        <label>Géneros:</label>
        {generos?.map((x) => { 
            return (<label><input type="checkbox" name="genres" value={x.name}></input>{x.name}</label>)
        }
            )}
        </li>

        <li>Plataformas</li>
        <li>
            <select>
        {plataformas?.map((x) => {
            
            return (<option name="platforms" value={x.name}>{x.name}</option>)

        }
            )}
            </select>
        </li>

        </ul>



        {/* Botón de envío */}
        <input type="submit" />


    </form>
    </>)   
}