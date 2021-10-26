import {useState} from 'react'
import axios from 'axios';
require('dotenv').config()

export default function SearchBar(){

    let [search, setSearch] = useState('')

    // NO SEAS PAVO, PARA ALGO TENÉS EL REDUCER, NO TE OLVIDES 
    function onSubmit(e){
        e.preventDefault();
        axios.get(search)
    }

    function onInputChange(e){
        e.preventDefault();

        setSearch(e.target.value) 
        console.log(setSearch);
    }


    return(<>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value={search}/>
            <input type="submit" value="Buscar" />

        </form>
    </>)
}