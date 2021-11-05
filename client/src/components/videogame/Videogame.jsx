import { Link } from 'react-router-dom'

export default function Videogame(props){
    
    // Componente presentacional

    const { id, name, image, genres } = props;

    // description, rating, released, También vienen por si acaso.

    // Genres es un array de objetos
    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<div>

    {/* ..... Redireccionamiento ..... */}
    <Link to={`/games/${id}`}>

    <h3>{name}</h3>

    <img src={image} alt="Image not found" width="500px" height="250px"/>

        <p>Géneros:</p>
        <ul>
            {/* Mostramos los géneros */}
            {genres?.map((x) => { return(
                <li>{x.name}</li>)
            })}
        </ul>
    
    </Link>

    </div>)
}