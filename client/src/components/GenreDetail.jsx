import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import vStylesV from "../assets/styles/videogameDetail.module.css";
import MainLayout from "./Layouts/mainLayout";

/**
 * Shows the details of an specific genre
 * @param {String} id - route identifier to use in the genre API call
 */
export default function GenreDetail() {
  const [genre, setGenre] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3009/genres/${id}`)
      .then((x) => {
        setGenre(x.data);
      })
      .catch((e) => console.log("ERORR", e));
    return () => {
      setGenre(null);
    };
  }, [id]);

  return (
    <MainLayout>
      <div className={vStylesV.container}>
        {genre ? (
          <div>
            <img
              className={vStylesV.containerImage}
              src={genre.image_background}
              alt="imgNotFound"
            />

            <h1 className={vStylesV.title}>
              {genre.name ? genre.name : "404 - Not Found"}
            </h1>

            <div className="mini-container">
              <h3>Games count: {genre.games_count ? genre.games_count : 0}</h3>

              {genre.description ? (
                <p
                  className={vStylesV.justifier}
                  dangerouslySetInnerHTML={{ __html: genre.description }}
                ></p>
              ) : (
                <p>"Genre detail not found in database"</p>
              )}
            </div>
          </div>
        ) : (
          <h1>Reloading</h1>
        )}

        <Link to="/home">
          <button className={vStylesV.input}>
            <h3>Back to Home</h3>
          </button>
        </Link>
        <br />
        <br />
      </div>
    </MainLayout>
  );
}
