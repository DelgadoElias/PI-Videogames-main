// Cambiable
import axios from "axios";

// Importaciones
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Actions necesarias
import { fetchGenres, fetchPlatforms } from "../../store/actions";

// Enrutamiento
import { Link } from "react-router-dom";

export default function AddVideogame() {
  // Cajita de variables
  const generos = useSelector((state) => state.genres);
  //.
  const plataformas = useSelector((state) => state.platforms);
  //.
  const dispatch = useDispatch();
  //.
  let history = useHistory();
  //.
  const [videogame, setVideogame] = useState({
    name: "",
    description: "",
    image: "",
    rating: 0,
    released: "",
    genres: [],
    platforms: [],
  }); // Lo que necesita nuestro videojuego en el estado local

  // Comenzamos con la codificación ..... ..... ..... .....
  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, []);
  // NO TE OLVIDES EL MALDITO ARRAY DE DEPENDENCIAS

  // Captame los cambios del formulario
  function onInputChange(e) {
    e.preventDefault();
    setVideogame({
      ...videogame,
      [e.target.name]: e.target.value,
    });
  }

  // Complete: Captame los cambios del checkbox nomás
  function handleCheckbox(e) {
      if(e.target.checked){ // Cuándo esté checkeado, subimelo
        setVideogame({
          ...videogame,
          genres : [e.target.value,...videogame.genres]
        });
      } // TODO: Y cuando no ¿que hacemos?
  }

  //Complete: Captame los cambios del selector nomás...
  function onSelect(e){
    setVideogame({
      ...videogame,
      platforms : [e.target.value,...videogame.platforms]
    });
    // TODO: Mostrar las plataformas seleccionadas para poder seleccionar una y eliminarla en el caso de que nos equivoquemos.
  }


  // ---------------------------------------------
  // ..... Levantamos las cosas .....
  async function onSubmit(e) {
    e.preventDefault();

    // NOTE: Podés modularizar esto la verdad pero bueno, creo que queda mejor así.
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
    <>
      {/* ..... Botón ..... */}
      <Link to="/home">
        <button className="button">
          <h3>Volver</h3>
        </button>
      </Link>

      {/* ..... Formulario requerido ..... */}
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <h1>Crear personaje</h1>
          </div>

          {/* ..... Nombre ..... */}
          <div>
            <label htmlFor="">Nombre:</label>
            <input
              onChange={onInputChange}
              name="name"
              type="text"
              value={videogame.name}
            />
          </div>

          {/* ..... Descripción ..... */}
          <div>
            <label>Descripción:</label>
            <input
              onChange={onInputChange}
              name="description"
              type="text"
              value={videogame.description}
            />
          </div>

          {/* ..... Imágen URL ..... */}
          <div>
            <label>Imágen:</label>
            <input
              onChange={onInputChange}
              name="image"
              type="text"
              value={videogame.image}
            />
          </div>

          {/* ..... Rating ..... */}
          <div>
            <label>Rating:</label>
            <input
              onChange={onInputChange}
              name="rating"
              type="number"
              value={videogame.rating}
            />
          </div>

          {/* ..... Released ..... */}
          <div>
            <label>Lanzamiento:</label>
            <input
              onChange={onInputChange}
              name="released"
              type="text"
              value={videogame.released}
            />
          </div>

          {/* ..... Géneros ..... */}
          <div>
            <h3>Géneros</h3>
            <label>Géneros:</label>
            {generos?.map((x) => {
              return (
                <label>
                  <input onChange={(e) => handleCheckbox(e)} type="checkbox" name="genres" value={x.name}></input>
                  {x.name}
                </label>
              );
            })}
          </div>

          {/* ..... Plataformas ..... */}

          <div>
            <h3>Plataformas</h3>
            <select>
              {plataformas?.map((x) => {
                return (
                  <option onChange={(e) => onSelect(e)} name="platforms" value={x.name}>
                    {x.name}
                  </option>
                );
              })}
            </select>
          </div>

            <div>
              <h3>Seleccionado:</h3>
              <ul>
                {videogame.platforms.map((x) => {
                  return (<li key={x.name} value={x.name}>{x.name}</li>)
                })}
              </ul> {/* TODO: Hacer la negación para esto */}
            </div>

          {/* Botón de envío */}
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
