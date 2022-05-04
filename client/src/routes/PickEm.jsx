import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameRandom } from "../store/actions";

import vStyles from "../assets/styles/videogame.module.css";
import MainLayout from "../components/Layouts/mainLayout";
import CardJelly from "../components/cards/CardJelly";

/**
 * PickEm route - Picks a random videogame and returns it in a card
 * @component
 * @description use MainLayout
 */
export default function PickEm() {
  const trigger = useSelector((state) => state.pickEm);
  const [videogame, setVideogame] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setVideogame({ ...trigger });
    dispatch(gameRandom());
  }, [dispatch, trigger]);

  /**
   * onRandomGame - Returns a new random game to show on.
   * @description Dispatch the 'gameRandom' function to get a new random game from the store
   * The new game will be stored in redux store in state.pickEm
   */
  function onRandomGame() {
    dispatch(gameRandom());
    setVideogame({ ...trigger });
  }

  return (
    <MainLayout>
      <div className="grid-container">
        <br />
        <button className={vStyles.button} onClick={onRandomGame}>
          Pick Random Game
        </button>
        <br />
        {trigger ? (
          <div className="">
            <CardJelly
            id={videogame.id}
            name={videogame.name}
            image={videogame.image}
            genres={videogame.genres}></CardJelly>
          </div>
        ) : (
          <h1>Reloading</h1>
        )}
      </div>
    </MainLayout>
  );
}

/**
 * TODO: Review this component. It should show when we loading, we need to pick a diff game and when we have a game
 */
