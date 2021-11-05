import { Link } from 'react-router-dom'

export default function Videogame(props){
    
    // Componente presentacional

    const { id, name, description, image, rating, released, genres } = props;
    // TODO: Deben llegar los géneros también

    // Genres es un array de objetos
    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<div>

    {/* ..... Redireccionamiento ..... */}
    <Link to={`/games/${id}`}>

    <h3>{name}</h3>

    <img src={image} alt={description} width="500px" height="250px"/>

        <p>Géneros:</p>
        <ul>
            {genres?.map((x) => { return(
                <li>{x.name}</li>)
            })}
        </ul>
    
    </Link>

    </div>)
}