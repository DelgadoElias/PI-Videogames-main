import React from "react";
import SearchBar from "../SearchBar";
import FilterGenres from "../filters/FilterGenres";
import FilterPlatforms from "../filters/FilterPlatforms";
import FilterDb from "../filters/FilterDb";
import FilterAPI from "../filters/FilterAPI";
import OrderRatings from "../orders/OrderRatings";
import Order from "../orders/Order";
import ResetVideogames from "../resetVideogames";
import { Link } from "react-router-dom";
import cStyles from '../../assets/styles/collapse.module.css'
import { useState } from "react";
export default function CollapseBarComponent() {

  const [dropdown, setDropdown] = useState('cStyles.dropdown');

  function handleDropdown() {
    if (dropdown === cStyles.dropdown) {
      setDropdown(cStyles.noDropdown);
    } else {
      setDropdown(cStyles.dropdown);
    }
  }

    return (<div className={dropdown}>
       <div className={cStyles.sidebar}>
    <div onClick={handleDropdown} className={cStyles.active}>Home</div>
          

            <div>
            <Link className={cStyles.nolink} to="/videogames/add">
            Add a videogame
            </Link>
            </div>
            <div>
            <Link className={cStyles.nolink} to="/About/elias">
            About author
            </Link>
            </div>
            <div>
            <Link className={cStyles.nolink} to="/pickem">
            Pickem Generator
            </Link>
            </div>
          
          <div>

          <div>
              <SearchBar></SearchBar>
          </div>
          <div>
           <FilterGenres></FilterGenres>
          </div>
          <div>
           <FilterPlatforms></FilterPlatforms>
          </div>
          </div>
          <div>

         <div>
             <h4>Order By:</h4>
         </div>
         <div>
           <OrderRatings></OrderRatings>
           <Order></Order>
         </div>
         <div>
           <FilterDb></FilterDb>
           <FilterAPI></FilterAPI>
         </div>
         <div>
           <ResetVideogames></ResetVideogames>
         </div>
          </div>

    </div>
    </div>)
}