// Barra lateral
import { Link } from 'react-router-dom';
import '../assets/styles/sidebar.css';


export default function Sidebar(){

   return( <ul className="ul">
       <Link to="/home">
  <li className="li"><a className="a" href="#home">Game Store</a></li>
       </Link>
       <Link to="/videogames/add">
  <li className="li"><a className="a">Add Videogame</a></li>
       </Link>
       <Link to="/About/elias">
  <li className="lasti"><a className="a">About</a></li>
       </Link>
  
</ul>)
}



// TODO: Creación de barra lateral

// Contendrá:
/**
 * 
 * Btn Adder - Crear videojuego
 * Btn Search - Buscar dentro de los videojuegos
 * Btn Home - Entrar al inicio de la página
 * 
 */

// TODO: Sidebar que pueda mostrarse y ocultarse

// EXTRA: Responsive --> lateral(Pc) a inferior(Móvil)