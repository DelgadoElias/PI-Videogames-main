// Archivo que nos ofrece la paginación de personajes

import React from "react";


// ------------------------------------------------

export default function Pagination({videogamesPerPage, allvideogames, paginado}){

    // Caja de variables
    const pageNumbers = []; // Arreglo vacío


    // ..... ..... ..... ..... ..... .....

    // Rellenamos pageNumbers con números que representan la cantidad de páginas
    for(let i = 1; i <= Math.ceil(allvideogames/videogamesPerPage); i++){
        pageNumbers.push(i);
    }

    // ..... ..... ..... ..... ..... .....

    // Componente que renderice los números de pagina en si
    return (
        <nav>
            <ul>
                { pageNumbers && pageNumbers.map( x => (
                    <li key={x}>
                        <a onClick={() => paginado(x)}>{x}</a>
                    </li>
                ))} 
            </ul>
        </nav>
    );
}