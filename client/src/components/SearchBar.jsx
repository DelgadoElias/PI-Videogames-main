import {useState} from 'react'
import {useDispatch} from 'react-redux'


import axios from 'axios';
import { searchVideogames } from '../store/actions';
require('dotenv').config()

export default function SearchBar(){

    let [search, setSearch] = useState('')
    let dispatch = useDispatch()


    // NO SEAS PAVO, PARA ALGO TENÉS EL REDUCER, NO TE OLVIDES 
    function onSubmit(e){
        e.preventDefault();
        searchVideogames;
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