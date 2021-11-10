// Back to Front
import axios from "axios";

// Importaciones REACT
import { useState } from "react";
import { useEffect } from "react";

// Routing
import { useParams } from "react-router"
import { Link } from "react-router-dom";

// ................................................
export default function GenreDetail() {


    const [ genre, setGenre ] = useState({});

    let { id } = useParams();


    // ..... Comencemos del inicio .....
    useEffect(() => {
        // ..
        axios.get(`http://localhost:3001/genres/${id}`).then((x) => {
            // ------------
            setGenre(x.data);
            console.log(x.data);
            // ------------
        }).catch(e => console.log(e));
        // Se limpia después
        return () => { setGenre(null); }
     }, []);

     // -------------------------------------------

     // ..
    return (<div className="container">

        {/*  */}
        {
        genre ? <div>
            <br />
            <Link to="/home">
        <button className="input padder">
          <h3>Back to Home</h3>
        </button>
      </Link>

      <h1>{genre.name ? genre.name : "404 - Not Found"}</h1>

      <img className="container-image" src={genre.image_background} alt="imgNotFound" />

            <div className="mini-container">
     <h3>Games count:  {genre.games_count ? genre.games_count : 0}</h3>

     <p className="justifier">{genre.description ? genre.description : "Genre detail not found in database"}</p>
     
     </div>
        </div> : <h1>Reloading</h1>
        }

        <br />

    </div>)
}