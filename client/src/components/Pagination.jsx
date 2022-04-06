import React from "react";
import '../assets/styles/pagination.css';


/**
 * Pagination component - Generates a list of buttons for each page to access when we click on them
 * @param {number} videogamesPerPage - The number of videogames per page to display
 * @param {number} allvideogames - The total amount of videogames in all pages
 * @param {Function} setPagination - A function to set the controls for the pagination
 * @param {number} actualPage - The actual page when we are viewing the videogames
 */
export default function Pagination({videogamesPerPage, allvideogames, setPagination, actualPage}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allvideogames/videogamesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>

            <div className="grid-container">
                {/* ..... La paginación no se va a ver si no hay más de 15 items ..... */}
            { allvideogames < 15 ? <div>{setPagination(1)}</div> : pageNumbers && pageNumbers.map( x => (
                    <button onClick={() => setPagination(x)} className={actualPage === x ? "active items letters" : "items letters" }>
                        {x}
                    </button>
                ))}
            </div>

        </nav>
    );
}