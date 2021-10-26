import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchVideogames } from '../store/actions'
import Videogame from "./Videogame"


// Componente de lógica
export default function Videogames(){
    let videogame = useSelector((state) => { return state.videogames})
    // console.log(videogame);
    let dispatch = useDispatch() // Despachar funciones
    // Eso me lo trae ya desde el inicio para mostrar algo
    useEffect(() => { 
        // FIXME: Problema con la disparatación de esto
        dispatch(fetchVideogames())
    },[])

    console.log(videogame);
     return <div>  
         {/* Componente presentacional */}
        {videogame.map((x) => {
            return <Videogame id={x.id} name={x.name} released={x.released} image={x.image} rating={x.rating} description={x.description} ></Videogame>
        })}
    </div>
}