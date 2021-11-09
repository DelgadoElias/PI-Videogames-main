import React from "react";
import { useDispatch } from "react-redux";
import { apiFilter } from "../../store/actions";


// ----------------------------------------------
// Filtra los contenidos de la api y la bdd, devolviendo la API
export default function FilterAPI(){

    
    // Caja de variables .....
    let tf = false;
    let dispatch = useDispatch();

    function onClickChange(){
        if(tf === true){
            tf = false;
            
        }else{
            tf = true;
            
        }
        dispatch(apiFilter(tf));
    }

    return(
    <button className="button" onClick={onClickChange}>API</button>
    )
}   