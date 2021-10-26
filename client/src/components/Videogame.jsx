export default function Videogame(props){
    
    const { id, name, description, image, rating, released } = props;
    
    return (<>
    <h1>{id}</h1>

    <p>{name}</p>

    <img src={image} alt="" />
    <p>descripción:{description}</p>

    <p>{rating}</p>

    <p>{released}</p>
    </>)
}