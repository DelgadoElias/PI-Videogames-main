// Aquí dentro se encontrará mi landingPage
// ----------------------------------------

// Importaciones necesarias
import React from 'react';
import { Link } from 'react-router-dom';

// ..... ..... ..... ..... ..... ..... ..... ..... .....
export default function LandingPage(){
    // Complete: Generar mi landingPage
    // ..... ..... ..... ..... ..... ..... ..... ..... .
    // TODO: Landing page - debe tener una imágen o animación de inicio 
    // Complete: Landing page - botón para direccionar al home...
    
    
    // ..... ..... ..... .....
    return (
    <div>
        <h1>Welcome, ¿wanna play a game?</h1>
        {/* Button */}
        <Link to="/home">
            <button>Come in</button>
        </Link>
    </div>
    );

}