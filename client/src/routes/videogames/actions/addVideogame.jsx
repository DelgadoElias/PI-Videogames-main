import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import vStyles from "../../../assets/styles/add.module.css";

import { Link } from "react-router-dom";
import MainLayout from "../../../components/Layouts/mainLayout";

/**
 * AddVideogame route - Renders the videogame form route to add new videogames
 * @return {React.ReactNode}
 */
export default function AddVideogame() {
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const history = useHistory();
  const [videogame, setVideogame] = useState({
    name: "",
    description: "",
    image: "",
    rating: 0,
    released: "",
    genres: [],
    platforms: [],
  });

  /**
   * onInputChange - Handle input changes of the videogame properties
   * @param {Event} e - HTML Events to fire e.preventDefault()
   * @description preventDefault function and set the videogame properties to the state
   */
  function onInputChange(e) {
    e.preventDefault();
    setVideogame({
      ...videogame,
      [e.target.name]: e.target.value,
    });
  }

  // ..... Cambios del checkbox nomás .....
  function handleCheckbox(e) {
    if (e.target.checked) {
      // Cuándo esté checkeado, subimelo
      setVideogame({
        ...videogame,
        genres: [e.target.value, ...videogame.genres],
      });
    } else {
      let filteredGenres = videogame.genres.filter((x) => {
        return x !== e.target.value;
      });
      setVideogame({
        ...videogame,
        genres: [...filteredGenres],
      });
    }
  }

  // ..... Cambios del selector .....
  function onSelect(e) {
    setVideogame({
      ...videogame,
      platforms: [...videogame.platforms, e.target.value],
    });
  }
  // Eliminar las platforms cuando nos arrepentimos
  function onDeSelect(e) {
    let filtraciones = videogame.platforms.filter((x) => {
      return x !== e;
    });

    setVideogame({
      ...videogame,
      platforms: [...filtraciones],
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/videogame/", videogame)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <MainLayout>
      <div
        className={`${vStyles.container} ${vStyles.CardItems} ${vStyles.animated} ${vStyles.fadeIn} ${vStyles.fast}`}
      >
        {/* ..... Button ..... */}
        <Link to="/home">
          <button className={`${vStyles.input} ${vStyles.button}`}>
            <h3>Back to Home</h3>
          </button>
        </Link>

        {/* ..... Required form ..... */}
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <h1 styles="text-align: left">¡Add new videogames!</h1>
              <br />
            </div>

            {/* ..... Name ..... */}
            <div>
              <label>Nombre:</label>
              <br />
              <input
                className={vStyles.input}
                onChange={onInputChange}
                name="name"
                type="text"
                value={videogame.name}
                required
              />
            </div>

            {/* ..... Description ..... */}
            <div>
              <label>Descripción:</label>
              <br />

              <input
                className={vStyles.input}
                onChange={onInputChange}
                name="description"
                type="text"
                value={videogame.description}
                required
              />
            </div>

            {/* ..... Image URL ..... */}
            <div>
              <label>Imágen:</label>
              <br />

              <input
                className={vStyles.input}
                onChange={onInputChange}
                name="image"
                type="text"
                value={videogame.image}
              />
            </div>

            {/* ..... Rating ..... */}
            <div>
              <label>Rating:</label>
              <br />

              <input
                className={vStyles.input}
                onChange={onInputChange}
                name="rating"
                type="number"
                value={videogame.rating}
              />
            </div>

            {/* ..... Released ..... */}
            <div>
              <label>Lanzamiento:</label>
              <br />

              <input
                className={vStyles.input}
                onChange={onInputChange}
                name="released"
                type="text"
                value={videogame.released}
              />
            </div>

            {/* ..... Géneros ..... */}
            <h3>Géneros</h3>
            <div className={vStyles.father}>
              <br />
              <br />

              {/* ..... Checkbox para los géneros seleccionados ..... */}
              {genres?.map((x) => {
                let genreSplited = x.name.split(" ");
                return (
                  <label>
                    <input
                      className={vStyles.hijo}
                      onChange={(e) => handleCheckbox(e)}
                      type="checkbox"
                      name="genres"
                      value={x.name}
                    ></input>
                    {genreSplited[1] ? "MMO" : genreSplited[0]}
                  </label>
                );
              })}
            </div>

            {/* ..... Plataformas ..... */}

            <div className={vStyles.containerMini}>
              <h3>Platforms</h3>
              <br />

              <select className={vStyles.input} onChange={(e) => onSelect(e)}>
                {platforms?.map((x) => {
                  return (
                    <option name="platforms" value={x.name}>
                      {x.name}
                    </option>
                  );
                })}
              </select>

              <div>
                {/* ..... Plataformas Seleccionadas ..... */}
                <h3>Platforms selected:</h3>
                <ul>
                  {videogame.platforms?.map((x) => {
                    return (
                      <h4 value={x} onClick={(e) => onDeSelect(x)}>
                        {x} - <span className={vStyles.x}>X</span>
                      </h4>
                    );
                  })}
                </ul>
              </div>
            </div>

            <hr />
            {/* Botón de envío */}
            <input
              className={`${vStyles.input} ${vStyles.padder}`}
              type="submit"
            />
            <br />
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
