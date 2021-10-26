import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchVideogames } from '../store/actions'
import Videogame from "./Videogame"

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
        {videogame.map((x) => {
            <Videogame videogame={x}></Videogame>
        })}
    </div>
}