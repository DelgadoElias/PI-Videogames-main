import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchVideogames } from '../store/actions'
import Videogame from "./Videogame"


// Componente de lógica
export default function Videogames(){
    
    let videogame = useSelector((state) => { return state.filteredVideogames})
    
    // Despachar funciones
    let dispatch = useDispatch() 
    
    // Eso me lo trae ya desde el inicio para mostrar algo
    useEffect(() => { 
        // Problema con la disparatación de esto
        dispatch(fetchVideogames())
    },[])

    /**
     * Podemos hacer dos cosas --> 
     * 
     * 1. Que del backEnd lleguen 30 items o más y filtrar por items en el FrontEnd
     * 2. Solicitar 15 nomás y acomodarlos en el frontEnd y cuándo entremos nuevamente hacer una segunda petición
     * 
     * 
     * --> Ganando: 2 
     */


    // Lo que vamos a pasarle al presentacional..
     return <div>  
         
        {videogame.map((x) => {
            return <Videogame id={x.id} name={x.name} released={x.released} image={x.image} rating={x.rating} description={x.description} ></Videogame>
        })}
    </div>
}