// Cambiable
import axios from "axios";

// Importaciones
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Actions necesarias
import { fetchGenres, fetchPlatforms } from "../../store/actions";

//Estilizaciones
import '../../assets/styles/add.css';


// Enrutamiento
import { Link } from "react-router-dom";

export default function AddVideogame() {
  // ..... Cajita de variables .....
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
  }); // Lo que necesita nuestro videojuego en el estado local para subirlo


  /**
   * ******************************************
   * ******************************************
   * OBSERVACIONES: Este es uno de los archivos menos modularizados que tengo.
   * ******************************************}
   * ******************************************
   */


  // Comenzamos con la codificación ..... ..... ..... .....
  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, []);

  // ..... Cambios del formulario .....
  function onInputChange(e) {
    e.preventDefault();
    setVideogame({
      ...videogame,
      [e.target.name]: e.target.value,
    });
  }

  // ..... Cambios del checkbox nomás .....
  function handleCheckbox(e) {
      if(e.target.checked){ // Cuándo esté checkeado, subimelo
        setVideogame({
          ...videogame,
          genres : [e.target.value,...videogame.genres]
        });

      }else{
        let filteredGenres = videogame.genres.filter((x) => { return x !== e.target.value; });
        setVideogame({
          ...videogame,
          genres : [...filteredGenres]
        });

      } 
  }

  // ..... Cambios del selector .....
  function onSelect(e){
    
    setVideogame({
      ...videogame,
      platforms : [...videogame.platforms, e.target.value]
    });

  }
  // Eliminar las plataformas cuando nos arrepentimos
  function onDeSelect(e){
    let filtraciones = videogame.platforms.filter((x) => { 
      console.log(e);
      return x !== e; }); 
    
    setVideogame({
      ...videogame,
      platforms : [...filtraciones]
    });
    console.log(videogame.platforms);
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
    <div className="container">
      {/* ..... Botón ..... */}
      <Link to="/home">
        <button className="input padder">
          <h3>Back to Home</h3>
        </button>
      </Link>

      {/* ..... Formulario requerido ..... */}
      <form onSubmit={onSubmit}>
        <div className="mini-container">
          <div>
            <h1 styles="text-align: left">¡Add new videogames!</h1>
          </div>

          {/* ..... Nombre ..... */}
          <div>
            <label>Nombre:</label>
            <br />
            <input
            className="input"
              onChange={onInputChange}
              name="name"
              type="text"
              value={videogame.name}
              required
            />
          </div>

          {/* ..... Descripción ..... */}
          <div>
            <label>Descripción:</label>
            <br />

            <input
            className="input"
              onChange={onInputChange}
              name="description"
              type="text"
              value={videogame.description}
              required
            />
          </div>

          {/* ..... Imágen URL ..... */}
          <div>
            <label>Imágen:</label>
            <br />

            <input
            className="input"
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
            className="input"
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
            className="input"
              onChange={onInputChange}
              name="released"
              type="text"
              value={videogame.released}
            />
          </div>

          {/* ..... Géneros ..... */}
            <h3>Géneros</h3>
          <div className="grid-card-container">
            <br />
            <br />

            {generos?.map((x) => {
              return (
                <label>
                  <input className="card-items leftier" onChange={(e) => handleCheckbox(e)} type="checkbox" name="genres" value={x.name}></input>
                  {x.name}
                </label>
              );
            })}
          </div>

          {/* ..... Plataformas ..... */}

          <div>
            <h3>Platforms</h3>
            <br />

            <select className="input" onChange={(e) => onSelect(e)}>
              {plataformas?.map((x) => {
                return (
                  <option name="platforms" value={x.name}>
                    {x.name}
                  </option>
                );
              })}
            </select>
          </div>

            <div>
              <h3>Platforms selected:</h3>
              <ul>
                {videogame.platforms?.map((x) => {
                  return (<h4 value={x} onClick={(e) => onDeSelect(x)}>{x}</h4>)
                })}
              </ul>
            </div>

          {/* Botón de envío */}
          <input className="input padder" type="submit" />
          <br />
        </div>
      </form>
    </div>
  );
}
