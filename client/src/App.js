import './App.css';
import Order from './components/order';
import SearchBar from './components/SearchBar';
import Videogame from './components/Videogame';
import Videogames from './components/Videogames';


function App() {
    
  
  
  return (
    <div className="App">
      <h1>Henry Videogames</h1>

      {/* Todavía no agregamos CSS */}
      <SearchBar></SearchBar>
      <Order></Order>    
      <Videogames></Videogames>
    </div>
  );
}

export default App;
