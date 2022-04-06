// React
import { useState } from "react";
import { useSelector } from "react-redux";

import Pagination from "../../components/Pagination";

import vStyles from "../../assets/styles/videogame.module.css";
import CardJelly from "../../components/cards/CardJelly";

export default function Videogames() {
  const videogame = useSelector((state) => {
    return state.filteredVideogames;
  });

  /**
   * Pagination variables
   */
  const [actualPage, setActualPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const lastVideogame = actualPage * videogamesPerPage;
  const firstVideogame = lastVideogame - videogamesPerPage;
  const actualVideogames = videogame.slice(firstVideogame, lastVideogame);

  /**
   * setPagination - Controls the pagination of the cards
   * @return {number} The new actual page
   */
  const setPagination = (page) => {
    return setActualPage(page);
  };

  return (
    <>
      <div className={vStyles.gridCardContainer}>
        {actualVideogames.length === 0 ? (
          <h1>Reloading</h1>
        ) : (
          actualVideogames.map((x, idx) => {
            return (
              <div key={idx}>

                <CardJelly
                id={x.id}
                name={x.name}
                image={x.image}
                genres={x.genres}></CardJelly>
              </div>
            );
          })
        )}
      </div>
      {/* HERE: Pagination section */}
      {
        <Pagination
          videogamesPerPage={videogamesPerPage}
          allvideogames={videogame.length}
          setPagination={setPagination}
          actualPage={actualPage}
        />
      }
    </>
  );
}
