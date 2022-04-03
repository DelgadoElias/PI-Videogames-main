// Botón para resetear el search bar sin tener que borrar todo

import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGames } from '../store/actions';

// ..
import vStyles from "../assets/styles/videogame.module.css"
// --------------------------------------------------
export default function ResetVideogames(){



    // Caja de variables
    let dispatch = useDispatch();

    function onClickChange(){
        dispatch(resetGames())
    }

    // .....
    return (<button onClick={onClickChange} className={vStyles.button}>
        Reset
    </button>)
}