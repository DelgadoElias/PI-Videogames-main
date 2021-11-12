import FilterAPI from "./filters/FilterAPI"
import FilterDb from "./filters/FilterDb"
import FilterGenres from "./filters/FilterGenres"
import FilterPlatforms from "./filters/FilterPlatforms"
import Order from "./orders/Order"
import OrderRatings from "./orders/OrderRatings"
import ResetVideogames from "./resetVideogames"
import SearchBar from "./SearchBar"

//..
import vStyles from "../assets/styles/sNavbar.module.css"

// --------------------------------------------
// Modularización de los navBars
export default function SpecialNavBar(){
    return(<div>
        {/* Acá concentraremos todas las cosas que se usarán dentro del home */}
        <div className={vStyles.semi}>
            <br />
         {/* ..... Búsqueda ..... */}

        <SearchBar></SearchBar>
        <br />
        </div>
        <br />
        {/* ..... Filtros ..... */}
        {<FilterGenres></FilterGenres>}
        {<FilterPlatforms></FilterPlatforms>}
        <br />
        {/* ..... Ordenamientos ..... */}
        {<OrderRatings></OrderRatings>}
        {<Order></Order>}
        <br />
        {/* ..... Resets ..... */}
        {<FilterAPI></FilterAPI>}
        {<FilterDb></FilterDb>}
        <ResetVideogames></ResetVideogames>

    </div>)
}