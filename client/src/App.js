import { Route, Switch } from "react-router";
import "./App.css";

import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home";
import About from "./routes/About";
import PickEm from "./routes/PickEm";
import AddVideogame from "./routes/videogames/actions/addVideogame";
import VideogameDetail from "./components/videogame/VideogameDetail";
import GenreDetail from "./components/GenreDetail";

/**
 * App - We use this main component to provide the main route page
 * @description provides the main route for the app. All of the components in a route must have
 * a MainLayout component to use the nabvar or sidebar
 * @component
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
    </div>
  );
}

export default App;

/**
 * In this section we save the TODO list
 * TODO: Delete the fucking comments and use JSDoc
 * Complete: Create centralized store reload
 * TODO: Create a function that calls the API and get the different routes as params
 * TODO: Upgrade imports CSS to the components
 * complete: Create Layout component to provide the navbar or collapseBar
 * Complete: Clean routes
 * Complete: Check videogame Detail route to modify
 * TODO: Modify Videogame Detail CSS
 * TODO: Refactor searchBar component to use modularized
 * TODO: Change 'constantes' folder to a 'constants' to place in store
 */
