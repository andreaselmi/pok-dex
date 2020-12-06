import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  caught: localStorage.getItem("caught")
    ? JSON.parse(localStorage.getItem("caught"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const PokemonContext = createContext(initialState);

const PokemonContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("caught", JSON.stringify(state.caught));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addPokemonToCaught = (pokemon) => {
    dispatch({
      type: "ADD_POKEMON_TO_CAUGHT",
      payload: pokemon,
    });
  };

  const addPokemonToWatched = (pokemon) => {
    dispatch({
      type: "ADD_POKEMON_TO_WATCHED",
      payload: pokemon,
    });
  };

  const removePokemonFromCaught = (pokemon) => {
    dispatch({
      type: "REMOVE_POKEMON_FROM_CAUGHT",
      payload: pokemon,
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        caught: state.caught,
        watched: state.watched,
        addPokemonToCaught,
        addPokemonToWatched,
        removePokemonFromCaught,
      }}
    >
      {props.children}{" "}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
