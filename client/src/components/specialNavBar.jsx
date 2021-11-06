import FilterDb from "./filters/FilterDb"
import FilterGenres from "./filters/FilterGenres"
import FilterPlatforms from "./filters/FilterPlatforms"
import Order from "./orders/Order"
import OrderRatings from "./orders/OrderRatings"
import SearchBar from "./SearchBar"
// Modularización de los navBars
export default function SpecialNavBar(){
    return(<div>
        {/* Acá concentraremos todas las cosas que se usarán dentro del home */}
        <div className="semi">
            <br />
         {/* ..... Búsqueda ..... */}

        <SearchBar></SearchBar>
        <br />
        </div>
        <br />
        {/* ..... Filtros ..... */}

        {<FilterDb></FilterDb>}
        {<FilterGenres></FilterGenres>}
        {<FilterPlatforms></FilterPlatforms>}
        <br />
        {/* ..... Ordenamientos ..... */}
        {<OrderRatings></OrderRatings>}
        {<Order></Order>}

    </div>)
}