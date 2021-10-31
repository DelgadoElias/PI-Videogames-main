import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export default function AddVideogame(){
    
    const [videogame, setVideogame] = useState({})

    let history = useHistory()

    // Función para captar los cambios
    function onInputChange(e){
        e.preventDefault();
        setVideogame({
            ...videogame,
            [e.target.name] : e.target.value
        });
    }

    async function onSubmit(e){
        e.preventDefault();
        //Uncomplete: ¿Creo que se como pero no entiendo?
        
        axios.post('http://localhost:3001/videogame/',videogame).then(() => {
            history.push('/')
        }).catch((err) => {console.log(err);})
    }

    return (<>
    <form onSubmit={onSubmit}>
        <label htmlFor="">Nombre</label>
        <input onChange={onInputChange} name="name" type="text" value={videogame.name}/>

        <label htmlFor="">Descripción</label>
        <input onChange={onInputChange} name="description" type="text" value={videogame.description} />

        <label htmlFor="">Imágen</label>
        <input onChange={onInputChange} name="image" type="text" value={videogame.image} />

        <label htmlFor="">Rating</label>
        <input onChange={onInputChange} name="rating" type="text" value={videogame.rating} />

        <label htmlFor="">Lanzamiento</label>
        <input onChange={onInputChange} name="released" type="text" value={videogame.released} />

        {/* Botón de envío */}
        <input type="submit" />

    </form>
    </>)   
}