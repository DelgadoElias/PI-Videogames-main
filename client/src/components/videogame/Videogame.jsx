import { Link } from 'react-router-dom'

export default function Videogame(props){
    
    // Componente presentacional

    const { id, name, description, image, rating, released } = props;
    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<>

    {/* ..... Redireccionamiento ..... */}
    <Link to={`/games/${id}`}>

    <h3>{name}</h3>

    <img src={image} alt={description} />

    <p>{rating}</p>

    <p>{released}</p>
    
    </Link>

    </>)
}