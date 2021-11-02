// React
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// ...Importaciones de mi aplicación
import { fetchVideogames } from '../../store/actions'
import Videogame from "./Videogame"

// ...React-router
import { Link } from "react-router-dom"

// --------------------------------------------------------------------
// Logic Component
export default function Videogames(){

    // ..... Caja de variables .....
    let videogame = useSelector((state) => { return state.filteredVideogames}); // Toma las variables del store
    
    
    let dispatch = useDispatch() 
    // ..... ..... ..... ..... .....
        // TODO: Paginación.

    


    // ..... ..... ..... ..... .....
    /* Esto NO me trae las cosas, las guarda en la variable del store para que yo pueda usarlas */
    useEffect(() => {
        // --> mapDispatchToProps() 
        dispatch(fetchVideogames())
    },[]);
    // TODO: Investigá las dependencias dle useEffect.





    // ..... ..... ..... ..... .....
     return <div>  

        {/* Por ahora usamos esto hasta el sidebar */}
        <Link to="/videogames/add"><button>Crear personaje</button></Link>

        {videogame.map((x) => {
            return <Videogame id={x.id} name={x.name} released={x.released} image={x.image} rating={x.rating} description={x.description} ></Videogame>
        })}
        {/* ..... ¿Botones? ..... */}
        
    </div>
    // ..... ..... ..... ..... .....

}