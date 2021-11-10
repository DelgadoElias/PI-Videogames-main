import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Estilizaciones
import "../../assets/styles/videogame.css";

// --------------------------------------------
export default function Videogame(props) {
  // ..... Componente presentacional .....

  let generos = useSelector((state) => { return state.genres})

  let { id, name, image, genres, released, extra } = props;
  // description, rating, released, También vienen por si acaso.

  // ..... Como mostraré los géneros .....

    // Acortemos el título para que entre mejor.
    let prueba = name.split(':');

    if(!released){
      released = "Unknown - ???"
    }

    // Conseguimos el id (Se hacía con un find antes pero cambie por motivos no convencionales)
    function onDemand(name){
      console.log(name);
      if(!genres.id){
        let generazo = generos.filter((x) => {
        console.log(x.name, x.id, name);
        return x.name === name} )
        console.log(generazo);
        return generazo[0].id // Jajajaj
      }
    }
 // -------------------------------------------------------------
  return (
    <div className="card-items">
      {/* ..... Redireccionamiento ..... */}
      <h3>{prueba[0]}</h3>
      <h5>{prueba[1] ? prueba[1] : released }</h5>
      {/* Título completo, si sobra espacio mostramos la fecha */}
      { extra=== true ? <img className="image" src={image} alt="Image not found" /> : <Link to={`/games/${id}`}>
      <img className="image" src={image} alt="Image not found" />
      </Link>}

      { extra === true ? "" : <p>Genres:</p>}
      {/* ..... Mostramos los géneros ..... */}
      <p>
        {genres?.map((x) => {
            let genreSplited = x.name.split(' ');
            return (
            <Link className="Link" to={`/genres/${x.id ? x.id : onDemand(x.name) }`}>
              <span className="spanning"> {genreSplited[1] ? "MMO" : genreSplited[0]} </span>
            </Link>
          );
        })}
      </p>
      {/* ------------------------------------------- */}

      {/* ..... Vamos al videogameDetail ..... */}
      {/* ..... Si tiene la propiedad extra marcada en true entonces no mostrará los links de detalles ..... */}
      {extra === true ? <div><h1>Please wait</h1><br /></div> : <Link to={`/games/${id}`}>
        <button className="button-card">Details</button>
      </Link>}
    </div>
  );
}


// ¿Por que mostramos la fecha en el título si sobra esapcio?

/**********************
 * Primero, una cuestión de espacio y mejora de las cards para los margenes y botones
 * 
 * Segundo, existen ciertos videojuegos que tienen mismos nombres que otros pero son diferentes sagas. Al poner las fechas podremos diferenciarlos un poco más.
 */