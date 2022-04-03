import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import vStyles from "../../assets/styles/add.module.css";
import vStylesV from "../../assets/styles/videogameDetail.module.css";
import MainLayout from "../Layouts/mainLayout";

export default function VideogameDetail() {
  // Componente presentacional

  // ----------------------------------------
  const [videogame, setVideogame] = useState(null);

  let { id } = useParams();

  // ----------------------------------------
  useEffect(() => {
    // Creo que se como pasarlo a async. Prefiero mostrarlo mitad y mitad
    axios
      .get(`http://localhost:3009/videogame/${id}`)
      .then((x) => {
        // ------------
        setVideogame(x.data);
        // ------------
      })
      .catch((e) => console.log(e));

    // Es buena práctica limpiar el state
    return () => {
      setVideogame(null);
    };
  }, []);
  // ----------------------------------------

  return (
    <MainLayout>
      <div
        className={`${vStylesV.container} ${vStyles.CardItems} ${vStyles.animated} ${vStyles.fadeIn} ${vStyles.fast}`}
      >
        <div>
          {/* Ternario para problemas entre mi API y la del RAWG */}
          {/* ----------------------------------- */}
          {videogame ? (
            <div>
              {/* <h1>{videogame.id}</h1> */}

              <img
                className={`${vStyles.animated} ${vStyles.fadeIn} ${vStyles.fast} ${vStylesV.containerImage}`}
                src={
                  videogame.background_image
                    ? videogame.background_image
                    : videogame.image
                }
                alt="imgNotFound"
              />
              {/* ..... ..... ..... */}
              <h1 className={`${vStylesV.title} `}>{videogame.name}</h1>
              <div className={` ${vStylesV.justifier}`}>
                <h3>Description</h3>
                <p>{`${
                  videogame.description_raw
                    ? videogame.description_raw
                    : videogame.description
                }`}</p>

                <h3>Rating:</h3>
                <p>{videogame.rating}</p>

                <h3>Genres</h3>
                <ul>
                  {videogame.genres.map((x) => {
                    return <li>{x.name}</li>;
                  })}
                </ul>

                {/* EXTRA: Esto se puede linkear a cada plataforma. Extra Credit... */}
                <h3>Platforms supported</h3>
                <ul>
                  {videogame.platforms.map((x) => {
                    let av;
                    if (videogame.id?.length > 8) {
                      av = x.name;
                    } else {
                      av = x.platform.name;
                    }

                    return <li>{av}</li>;
                  })}
                </ul>

                <h3>Released:</h3>
                <p>{videogame.released}</p>
                <br />
              </div>
            </div>
          ) : (
            <h1>Reloading</h1>
          )}

          {/* EXTRA: Botonera de Eliminar y actualizar el videogame. */}
        </div>

        <br />
        <Link to="/home">
          <button className={`${vStyles.input} ${vStyles.padder}`}>
            <h3>Back to Home</h3>
          </button>
        </Link>
      </div>
    </MainLayout>
  );
}
