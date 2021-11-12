// Aquí dentro se encontrará mi landingPage
// ----------------------------------------

// Importaciones necesarias
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Actions

import { fetchVideogames, fetchGenres, fetchPlatforms } from "../store/actions";


// Estilización
import StylingCSS from '../assets/styles/landing.module.css';

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
    <div className={StylingCSS.container}>
        <h1>Welcome to my Individual Project</h1>
        <br />
        
        {/* ..... Button ..... */}

        <Link to="/home">
            <button className={StylingCSS.buttonLanding}><h3>Come in</h3></button>
        </Link>

        {/* ..... Final del Button ..... */}

    </div>
    );

}