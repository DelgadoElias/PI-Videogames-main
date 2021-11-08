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

    // ..... ..... ..... .....

    let dispatch = useDispatch();

    // ..... ..... ..... .....


    useEffect(() => {
        // --> mapDispatchToProps() 
        dispatch(fetchVideogames());
        dispatch(fetchGenres());
        dispatch(fetchPlatforms());
        // Precarguemos todo...
    },[]);
    
    
    // ..... ..... ..... .....
    return (
        // ... Prueba de testing ...
    <div className="landingPageComponent">
        <h1>Welcome, ¿wanna play a game?</h1>
        <br />
        
        {/* ..... Button ..... */}

        <Link to="/home">
            <button className="button-landing"><h3>Come in</h3></button>
        </Link>

        {/* ..... Final del Button ..... */}

    </div>
    );

}