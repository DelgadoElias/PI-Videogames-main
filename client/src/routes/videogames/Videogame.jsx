import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Estilizaciones
import vStyles from '../../assets/styles/videogame.module.css';
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

    // EN CASO DE ERRORES, Esto buscará por nombre parecido y le asignará un id al género
    function onDemand(name){
      if(!genres.id){
        let generazo = generos.filter((x) => {
        return x.name === name} )
        return generazo[0].id 
      }
    }
 // -------------------------------------------------------------
  return (
    <div className={`${vStyles.CardItems} ${vStyles.animated} ${vStyles.fadeIn} ${vStyles.fast}`}>
      {/* ..... Redireccionamiento ..... */}
      { extra=== true ? <img className={vStyles.Image} src={image} alt="Image not found" /> : <Link to={`/games/${id}`}>
      <img className={vStyles.Image} src={image} alt="Image not found" />
      </Link>}


      <h3 className={vStyles.textHeader}>{prueba[0]}</h3>
      <p>{prueba[1] ? prueba[1] : released }</p>
      {/* Título completo, si sobra espacio mostramos la fecha */}

      { extra === true ? "" : <p>Genres:</p>}
      {/* ..... Mostramos los géneros ..... */}
      <div className={vStyles.gridCardContainer}>
        {genres?.map((x) => {
            let genreSplited = x.name.split(' ');
            return (
            <Link className={vStyles.Link} to={`/genres/${x.id ? x.id : onDemand(x.name) }`}><span className={vStyles.spanning}> {genreSplited[1] ? "MMO" : genreSplited[0]}</span>
            </Link>
          );
        })}
      </div>
      {/* ------------------------------------------- */}

      {/* ..... Vamos al videogameDetail ..... */}
      {/* ..... Si tiene la propiedad extra marcada en true entonces no mostrará los links de detalles ..... */}
      <div>
      {extra === true ? <div><h1>Please wait</h1><br /></div> : <Link to={`/games/${id}`}>
        <button className={vStyles.button}>Details</button>
      </Link>}
      </div>
    </div>
  );
}


// ¿Por que mostramos la fecha en el título si sobra esapcio?

/**********************
 * Primero, una cuestión de espacio y mejora de las cards para los margenes y botones
 * 
 * Segundo, existen ciertos videojuegos que tienen mismos nombres que otros pero son diferentes sagas. Al poner las fechas podremos diferenciarlos un poco más.
 */