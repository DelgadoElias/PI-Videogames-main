import { Route, Switch } from 'react-router';
import './App.css';

// Functions

// Ordenamientos
import Order from './components/orders/Order';
import OrderRatings from './components/orders/OrderRatings';

//Search
import SearchBar from './components/SearchBar';

// Filtros
import FilterDb from './components/filters/FilterDb';
import FilterGenres from './components/filters/FilterGenres';


// Videogames
import AddVideogame from './components/crud-Videogames/addVideogame';
import VideogameDetail from './components/videogame/VideogameDetail';
import Videogames from './components/videogame/Videogames';
import LandingPage from './components/LandingPage';


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
        {/* ..... Ruta inicial ..... */}
        <Route exact path="/home">
          <h1>Ordenar por</h1>
          <OrderRatings></OrderRatings>
          <Order></Order>
          <FilterDb></FilterDb>
          <FilterGenres></FilterGenres>
          <br />
          <Videogames></Videogames>
        </Route>
        {/* ..... Landing Route ..... */}
        <Route path="/">    
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
