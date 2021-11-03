// React
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// ...Importaciones de mi aplicación
import { fetchVideogames } from '../../store/actions'
import Videogame from "./Videogame"

// ...React-router
import { Link } from "react-router-dom"
import Pagination from "../Pagination"

// --------------------------------------------------------------------
// Logic Component
export default function Videogames(){

    // ..... Caja de variables .....
    let videogame = useSelector((state) => { return state.filteredVideogames}); // Toma las variables del store
    
    
    let dispatch = useDispatch();

    // ..... ..... ..... ..... ..... ..... .....
        // Complete: Paginación.
        // Estados locales para la paginación
        const [actualPage, setActualPage] = useState(1)
        const [videogamesPerPage, setVideogamesPerPage] = useState(15);

            // .. last Videojuego --> page
        const lastVideogame = actualPage * videogamesPerPage;
            // .. primer Videojuego --> page
        const firstVideogame = lastVideogame - videogamesPerPage;
        
        const actualVideogames = videogame.slice(firstVideogame, lastVideogame);

        const paginado = (page) => {
            return setActualPage(page);
        }


    // ..... ..... ..... ..... ..... ..... .....

    /* Esto NO me trae las cosas, las guarda en la variable del store para que yo pueda usarlas */
    useEffect(() => {
        // --> mapDispatchToProps() 
        dispatch(fetchVideogames())
    },[]);
    // TODO: Investigá las dependencias dle useEffect.




    console.log(actualVideogames);
    // ..... ..... ..... ..... .....
     return <div>  

        {/* Por ahora usamos esto hasta el sidebar */}
        <Link to="/videogames/add"><button>Crear personaje</button></Link>

        
        <Pagination videogamesPerPage={videogamesPerPage} allvideogames={videogame.length} paginado={paginado}/>

        {/* TODO: Pasarle los géneros también */}

        {actualVideogames.map((x) => {
            return <Videogame id={x.id} name={x.name} released={x.released} image={x.image} rating={x.rating} description={x.description} genres={x.genres}></Videogame>
        })}
        {/* ..... ¿Botones? ..... */}


        


    </div>
    // ..... ..... ..... ..... .....

}