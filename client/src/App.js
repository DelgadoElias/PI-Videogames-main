import { Route, Switch } from 'react-router';
import './App.css';
import AddVideogame from './components/addVideogame';
import Order from './components/Order';
import SearchBar from './components/SearchBar';
import VideogameDetail from './components/VideogameDetail';
import Videogames from './components/Videogames';


function App() {
    
  
  
  return (
    <div className="App">
      <h1>Henry Videogames</h1>

      {/* ..... Todavía no agregamos CSS ..... */}
      <SearchBar></SearchBar>
      {/* ..... Enrutamiento completo ..... */}
      <Switch>

        {/* ..... Agregado de un videojuego ..... */}
        <Route exact path="/add">
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
