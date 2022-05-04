import React from "react";
import { Link } from "react-router-dom";

/**
 * @Genres object
 * @param {string} id - Id of the genre
 */

/**
 * Card Jelly with hover component
 * @component
 *
 * @param {String} id - Id to link the card with the videogame detail
 * @param {String} name - Name of the videogame
 * @param {String} image - Img url
 * @param {Array<Genres>} genres - Array of genres to this videogame
 *
 * @return {React.ReactElement} - Card element
 * 
 * @TODO: Implement classes props to pass CSS classes to the component
 * 
 * @example
 * const id = 'uuidv4' || '12345'
 * const name = 'My Videogame'
 * const image = 'https://localhost:3000/image.png'
 * const genres = [{id: 2, name: 'genre', slug: 'genre', games_count: 0,},{genre}]
 * 
 * return (
 * <CardJelly 
 *  id={id} name={name} image={image} genres={genres} />
 * );
 */
export const CardJelly = ({ id, name, image, genres }) => {
  return (
    <article>
      <div>
        <div className="card">
          <img src={image} alt="Videogame" />
          <div className="info">
            <h1>{name || "Text-name"}</h1>
            <p>
              {genres !== undefined ? genres.map((genre) => {
                return (
                  <Link  key={genre.id} className="white-color" to={`/genres/${genre.id}`}>
                    <span>{genre.name}</span>
                  </Link>
                );
              }) : <span>Reload genres</span>}
            </p>
            <Link to={`/videogames/${id}`}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
              {/* jsx */}
      <style>{`

        span {
            transition: 0.4s;
            padding: 5px;
        }
        span:hover{
            background-color: white;
            opacity: 0.5;
        }

        .card {
          width: 280px;
          height: 360px;
          border-radius: 15px;
          padding: 1.5rem;
          background: white;
          position: relative;
          display: flex;
          align-items: flex-end;
          transition: 0.4s ease-out;
          box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
        }
        .card:hover {
          transform: translateY(20px);
        }
        .card:hover:before {
          opacity: 1;
        }
        .card:hover .info {
          opacity: 1;
          transform: translateY(0px);
        }
        .card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2;
          transition: 0.5s;
          opacity: 0;
        }
        .card img {
          width: 100%;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 15px;
        }
        .card .info {
          position: relative;
          z-index: 3;
          color: white;
          opacity: 0;
          transform: translateY(30px);
          transition: 0.5s;
        }
        .card .info h1 {
          margin: 0px;
        }
        .card .info p {
          letter-spacing: 1px;
          font-size: 15px;
          margin-top: 8px;
        }
        .card .info button {
          padding: 0.6rem;
          outline: none;
          border: none;
          border-radius: 3px;
          background: white;
          color: black;
          font-weight: bold;
          cursor: pointer;
          transition: 0.4s ease;
        }
        .card .info button:hover {
          background: dodgerblue;
          color: white;
        }
      `}</style>
    </article>
  );
};

export default CardJelly;
