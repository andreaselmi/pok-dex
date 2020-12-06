import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  caught: localStorage.getItem("caught")
    ? JSON.parse(localStorage.getItem("caught"))
    : [],
  seen: localStorage.getItem("seen")
    ? JSON.parse(localStorage.getItem("seen"))
    : [],
};

export const PokemonContext = createContext(initialState);

const PokemonContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("caught", JSON.stringify(state.caught));
    localStorage.setItem("seen", JSON.stringify(state.seen));
  }, [state]);

  // actions
  const addPokemonToCaught = (pokemon) => {
    dispatch({
      type: "ADD_POKEMON_TO_CAUGHT",
      payload: pokemon,
    });
  };

  const addPokemonToSeen = (pokemon) => {
    dispatch({
      type: "ADD_POKEMON_TO_SEEN",
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
        seen: state.seen,
        addPokemonToCaught,
        addPokemonToSeen,
        removePokemonFromCaught,
      }}
    >
      {props.children}{" "}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
