import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchPlatforms, fetchVideogames, gameRandom } from "../../store/actions";
import Videogame from "../videogame/Videogame";

// ---------------------------------------------
// Toma un número al azar y lo devuelve
export default function PickEm(){

    // Caja de variables
    const trigger = useSelector((state) => state.pickEm)
    const [poder, setPoder] = useState({});
    let dispatch = useDispatch();

    // ..... .....
    // Si se recarga la page tengo que cargar desde acá todo
    useEffect(() =>{
        setPoder({...trigger})
        dispatch(fetchVideogames())
        dispatch(fetchGenres())
        dispatch(fetchPlatforms())
        dispatch(gameRandom())
    },[dispatch]);
    
    
    
    // ..... .....
    // Vamos a tirar games al azar
    function onRandomGame(){
        // Guardamos en el pickEm un número al azar
        dispatch(gameRandom())
        setPoder({...trigger})
        //console.log(trigger.id);
    }

    return (<div className="grid-container">
        <br />
        <button className="button" onClick={onRandomGame}>Pick Random Game</button>
        { 
        trigger ? 
        <div className="">
        <Videogame id={poder.id ? poder.id : "Unknown" } name={poder.name ? poder.name : "Press Button"} released={poder.released} image={poder.image ? poder.image : "https://msbarrons.com/wp-content/uploads/2017/06/maxresdefault.jpg"} rating={poder.rating} description={poder.description ? poder.description : "Press Pick Random Game to select a random game from the database"} genres={poder.genres} extra={poder.id ? false : true} ></Videogame>
        
        </div> : <h1>Reloading</h1>
        }
        
    </div>)
}


/*

        

*/ 