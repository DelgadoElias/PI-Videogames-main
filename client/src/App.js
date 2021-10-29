import { Route, Switch } from 'react-router';
import './App.css';
import AddVideogame from './components/crud-Videogames/addVideogame';
import Order from './components/Order';
import SearchBar from './components/SearchBar';
import VideogameDetail from './components/videogame/VideogameDetail';
import Videogames from './components/videogame/Videogames';


function App() {
    
  
  
  return (
    <div className="App">
      <h1>PI</h1>

      {/* ..... Todavía no agregamos CSS ..... */}
      <SearchBar></SearchBar>
      {/* ..... Enrutamiento completo ..... */}
      <Switch>

        {/* ..... CRUD de un videojuego ..... */}
        {/* TODO: Hacer funcionar todos los CRUD */}
        <Route exact path="/add">
          <AddVideogame></AddVideogame>
        </Route>
        <Route exact path="/remove">
          <AddVideogame></AddVideogame>
        </Route>
        <Route exact path="/update">
          <AddVideogame></AddVideogame>
        </Route>

        {/* ..... Ruta para videogame Detail ..... */}
        <Route exact path="/:id">
          <VideogameDetail />
        </Route>
        {/* ..... Ruta inicial ..... */}
        <Route path="/">
          <Order></Order>    
          <Videogames></Videogames>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
