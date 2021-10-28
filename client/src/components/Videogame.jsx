export default function Videogame(props){
    
    // Componente presentacional

    const { id, name, description, image, rating, released } = props;
    //TODO: Decorarlo que está re feo - Está todo tirado así nomás
    return (<> 
    <h1>{id}</h1>

    <p>{name}</p>

    <img src={image} alt={description} />
    <p>descripción:{description}</p>

    <p>{rating}</p>

    <p>{released}</p>
    </>)
}