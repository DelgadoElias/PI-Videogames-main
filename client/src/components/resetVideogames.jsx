// Botón para resetear el search bar sin tener que borrar todo

import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideogames, resetGames } from '../store/actions';

// --------------------------------------------------
export default function ResetVideogames(){



    // Caja de variables
    let dispatch = useDispatch();

    function onClickChange(){
        dispatch(resetGames())
    }

    // .....
    return (<button onClick={onClickChange} className="button">
        Reset
    </button>)
}