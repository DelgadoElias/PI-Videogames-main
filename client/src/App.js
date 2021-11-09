import { Route, Switch } from 'react-router';
import './App.css';

// Videogames
import AddVideogame from './components/crud-Videogames/addVideogame';
import VideogameDetail from './components/videogame/VideogameDetail';
import Videogames from './components/videogame/Videogames';


// Extras
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import SpecialNavBar from './components/specialNavBar';
import AboutCreatorPage from './components/About';
import GenreDetail from './components/GenreDetail';
import PickEm from './components/Others/PickEm';


function App() {
  
  return (
    <div className="App">

      {/* ..... Navbar va en cada componente ..... */}
      
      {/* ..... Enrutamiento completo ..... */}
      <Switch>

      {/* ..... Extra: Game Random ..... */}
      <Route exact path="/pickem">
      <Navbar></Navbar>
          <PickEm></PickEm>
        </Route>

      {/* ..... About page ..... */}
        <Route exact path="/About/elias">
        <Navbar></Navbar>  
          <AboutCreatorPage></AboutCreatorPage>
        </Route>

        {/* ..... CRUD de un videojuego ..... */}
        {/* Sprint2: Hacer funcionar todos los CRUD */}
        <Route exact path="/videogames/add">
        <Navbar></Navbar>
          <AddVideogame></AddVideogame>
        </Route>

        {/* ..... Ruta para videogame Detail ..... */}
        <Route exact path="/games/:id">
        <Navbar></Navbar>
          <VideogameDetail />
        </Route>

        {/* ..... Ruta para un género detail ..... */}
        <Route exact path="/genres/:id">
        <Navbar></Navbar>
          <GenreDetail />
        </Route>

        {/* ..... Ruta inicial ..... */}
        <Route exact path="/home">
        <Navbar></Navbar>
          <SpecialNavBar></SpecialNavBar>
          <br />
          <Videogames></Videogames>
        </Route>
        {/* ..... Landing Route ..... */}
        <Route path="/">    
          <LandingPage></LandingPage>
        </Route>

      </Switch>
      <br />
    </div>
  );
}

export default App;
