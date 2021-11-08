// Barra lateral
import { Link } from 'react-router-dom';
import '../assets/styles/sidebar.css';


export default function Navbar(){

     // Navbar 

   return( <ul className="ul">
       <Link to="/home">
  <li className="li"><a className="a" href="#home">Games</a></li>
       </Link>
       <Link to="/videogames/add">
  <li className="li"><a className="a">Add</a></li>
       </Link>
       <Link to="/About/elias">
  <li className="lasti"><a className="a">About</a></li>
       </Link>
  
</ul>)
}