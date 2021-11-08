import { Route, Switch } from 'react-router';
import './App.css';

// Videogames
import AddVideogame from './components/crud-Videogames/addVideogame';
import VideogameDetail from './components/videogame/VideogameDetail';
import Videogames from './components/videogame/Videogames';


// Extras
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import SpecialNavBar from './components/specialNavBar';
import AboutCreatorPage from './components/About';
import GenreDetail from './components/GenreDetail';

function App() {
  
  return (
    <div className="App">

      {/* ..... Navbar ..... */}
      <Sidebar></Sidebar>
      {/* ..... Enrutamiento completo ..... */}
      <Switch>
      {/* ..... About page ..... */}
        <Route exact path="/About/elias">    
          <AboutCreatorPage></AboutCreatorPage>
        </Route>

        {/* ..... CRUD de un videojuego ..... */}
        {/* Sprint2: Hacer funcionar todos los CRUD */}
        <Route exact path="/videogames/add">
          <AddVideogame></AddVideogame>
        </Route>
        <Route exact path="/remove">
          <AddVideogame></AddVideogame>
        </Route>
        <Route exact path="/update">
          <AddVideogame></AddVideogame>
        </Route>

        {/* ..... Ruta para videogame Detail ..... */}
        <Route exact path="/games/:id">
          <VideogameDetail />
        </Route>

        {/* ..... Ruta para un género detail ..... */}
        <Route exact path="/genres/:id">
          <GenreDetail />
        </Route>

        {/* ..... Ruta inicial ..... */}
        <Route exact path="/home">
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
