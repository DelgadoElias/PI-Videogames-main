// Aquí dentro se encontrará mi landingPage
// ----------------------------------------

// Importaciones necesarias
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Actions

import { fetchVideogames, fetchGenres, fetchPlatforms } from "../store/actions";


// Estilización
import '../assets/styles/landing.css';

// Probando


// ..... ..... ..... ..... ..... ..... ..... ..... .....
export default function LandingPage(){
    // Complete: Generar mi landingPage
    // ..... ..... ..... ..... ..... ..... ..... ..... .
    // TODO: Landing page - debe tener una imágen o animación de inicio 
    // Complete: Landing page - botón para direccionar al home...
    // ..... ..... ..... .....

    let dispatch = useDispatch();

    useEffect(() => {
        // --> mapDispatchToProps() 
        dispatch(fetchVideogames());
        dispatch(fetchGenres());
        dispatch(fetchPlatforms());
        // Precarguemos todo wachin...
    },[]);
    
    
    // ..... ..... ..... .....
    return (
    <div>
        <h1>Welcome, ¿wanna play a game?</h1>
        {/* <img className="radius" src={videogame} alt="No funca" /> */}
        <br />
        
        {/* Button */}

        <Link to="/home">
            <button className="button"><h3>Come in</h3></button>
        </Link>
    </div>
    );

}