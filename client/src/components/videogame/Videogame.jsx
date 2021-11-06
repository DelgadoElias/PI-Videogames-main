import { Link } from 'react-router-dom'

// Estilizaciones
import '../../assets/styles/videogame.css';


export default function Videogame(props){
    
    // Componente presentacional

    const { id, name, image, genres } = props;

    // description, rating, released, También vienen por si acaso.


    // Genres es un array de objetos
    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<div className="card-items">

    {/* ..... Redireccionamiento ..... */}
    <h3>{name}</h3>

    <img className="image" src={image} alt="Image not found"/>

        <p>Géneros:</p>
            {/* Mostramos los géneros */}
            {genres?.map((x) => { return(
                <p>{x.name}</p>)
            })}
            
    <Link to={`/games/${id}`}>
            <button className="button-card">Details</button>
    </Link>

    </div>)
}