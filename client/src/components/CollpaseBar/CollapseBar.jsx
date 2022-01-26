import React from "react";
import cStyles from '../../assets/styles/collapse.module.css'
import SearchBar from "../SearchBar";
import FilterGenres from "../filters/FilterGenres";
import FilterPlatforms from "../filters/FilterPlatforms";
import FilterDb from "../filters/FilterDb";
import FilterAPI from "../filters/FilterAPI";
import OrderRatings from "../orders/OrderRatings";
import Order from "../orders/Order";
import ResetVideogames from "../resetVideogames";
import { Link } from "react-router-dom";

export default function CollapseBarComponent() {
    return (<div>
       <div class={cStyles.sidebar}>
    <a class={cStyles.active} href="#home">Home</a>
          <div>

          <a href>
              <SearchBar></SearchBar>
          </a>
          <a href>
           <FilterGenres></FilterGenres>
          </a>
          <a href>
           <FilterPlatforms></FilterPlatforms>
          </a>
          </div>
          <div>

         <a href>
             <h4>Order By:</h4>
         </a>
         <a href>
           <OrderRatings></OrderRatings>
           <Order></Order>
         </a>
         <a href>
           <FilterDb></FilterDb>
           <FilterAPI></FilterAPI>
         </a>
         <a href>
           <ResetVideogames></ResetVideogames>
         </a>
          </div>
         <div>
            
            <Link to="/videogames/add">
            Add a videogame
            </Link>
            <Link to="/About/elias">
            About author
            </Link>
            <Link to="/pickem">
            Pickem Generator
            </Link>
         </div>
    </div>
    </div>)
}