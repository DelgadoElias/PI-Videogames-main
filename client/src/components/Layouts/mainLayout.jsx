import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, fetchPlatforms, fetchVideogames, gameRandom } from '../../store/actions';
import CollapseBarComponent from '../CollpaseBar/CollapseBar';
import Navbar from '../Navbar';

/**
 * main Layout - Adds the navbar o collapseBar to the route
 * @ReloadError dispatch the info again if the store is not loaded
 * @param {React.ReactNode} children - The children component
 * @param {boolean} needCollapse - To know if need navbar or collapse bar
 * @param {boolean} noBars - When we don't need navbar or collapse bar
 * @return {React.ReactElement}
 */
export default function MainLayout({children, needCollapse, noBars}) {

    const videogame = useSelector((state) => {
        return state.filteredVideogames;
    });

    const dispatch = useDispatch();

    /**
     * In case of reloading the browser we need to reload the store
     * @description Here we will reload the videogames, genres, platforms and a game random
     * for each one
     * TODO: Create a dispatch function to reset the data
     */
    useEffect(() => {
        const setData =  () => {
            if(videogame.length === 0){
                dispatch(fetchVideogames());
                dispatch(fetchGenres());
                dispatch(fetchPlatforms());
                dispatch(gameRandom());
            }
        }
        setData();

    },[dispatch, videogame]);

    return (<div>
        {needCollapse ? <CollapseBarComponent /> : <Navbar /> }
        {children}
        </div>);
}