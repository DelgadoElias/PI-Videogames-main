// Archivo que nos ofrece la paginación de personajes

import React from "react";

// Estilización
import '../assets/styles/pagination.css';


// ------------------------------------------------

export default function Pagination({videogamesPerPage, allvideogames, paginado, actualPage}){

    // Caja de variables
    const pageNumbers = []; // Arreglo vacío

    //TODO: Si tiene menos de 15 juegos no mostrar directamente esto

    // ..... ..... ..... ..... ..... .....

    // Rellenamos pageNumbers con números que representan la cantidad de páginas
    for(let i = 1; i <= Math.ceil(allvideogames/videogamesPerPage); i++){
        pageNumbers.push(i);
    }

    // ..... ..... ..... ..... ..... .....

    // Componente que renderice los números de pagina en si
    return (
        <nav>

            <div className="grid-container">
            { pageNumbers && pageNumbers.map( x => (
                    <button onClick={() => paginado(x)} className={actualPage === x ? "active items letters" : "items letters" }>
                        {x}
                    </button>
                ))}
            </div>

        </nav>
    );
}