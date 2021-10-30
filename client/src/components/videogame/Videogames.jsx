
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchVideogames } from '../../store/actions'
import Videogame from "./Videogame"


// Componente de lógica
export default function Videogames(){

    let videogame = useSelector((state) => { return state.filteredVideogames})
    
    
    let dispatch = useDispatch() 
    
    // Eso me lo trae ya desde el inicio para mostrar algo
    useEffect(() => { 
        dispatch(fetchVideogames())
    },[])

    // TODO: Botones para paginar los items y poner un onSelectChange. Mapear los botones para trabajar la paginación.


    // Lo que vamos a pasarle al presentacional..
     return <div>  

        {videogame.map((x) => {
            return <Videogame id={x.id} name={x.name} released={x.released} image={x.image} rating={x.rating} description={x.description} ></Videogame>
        })}
        {/* ..... ¿Botones? ..... */}
        
    </div>
}