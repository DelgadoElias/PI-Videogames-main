import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchVideogames } from '../store/actions'

export default function Videogames(){
    let videogame = useSelector((state) => { return state.videogames})
    // console.log(videogame);
    let dispatch = useDispatch() // Despachar funciones
    // Eso me lo trae ya desde el inicio para mostrar algo
    useEffect(() => { 
        // dispatch(fetchVideogames())
    })

    console.log(videogame);
    return <div>
        <h1>GHola soy un div cualquier que tiene problemas con los logs</h1>
    </div>
}