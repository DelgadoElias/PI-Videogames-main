// Ordenamiento de los videojuegos de menor a mayor

// Me gusta más esta opción debido a que me gustaría tener un sideBar

export default function Order(){
    return (<div>

        {/* Selector de los ordenamientos */}
        <select name="select">
            <option value="mayor">Mayor a menor</option>
            <option value="menor">Menor a mayor</option>
            <option value="normal">API</option>
        </select>
    </div>)
}
