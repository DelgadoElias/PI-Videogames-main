import { Route, Switch } from "react-router";
import "./App.css";

import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home";
import About from "./routes/About";
import PickEm from "./routes/PickEm";
import AddVideogame from "./components/crud-Videogames/addVideogame";
import VideogameDetail from "./components/videogame/VideogameDetail";
import GenreDetail from "./components/GenreDetail";

/**
 * App - We use this main component to provide the main route page
 */
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/pickem" component={PickEm} />
        <Route exact path="/videogames/actions/add" component={AddVideogame} />
        <Route exact path="/videogames/:id" component={VideogameDetail} />
        <Route exact path="/genres/:id" component={GenreDetail} />
      </Switch>
      <br />
    </div>
  );
}

export default App;

/**
 * In this section we save the TODO list
 * TODO: Delete the fucking comments and use JSDoc
 * complete: Create Layout component to provide the navbar or collapseBar
 * Complete: Clean routes
 * TODO: Check videogame Detail route to modify
 */
