import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

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

  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const PokeApiUrl = "https://pokeapi.co/api/v2/pokemon-species/";

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  //fetchdata and errorhandling
  const fetchData = async (url, query = "") => {
    setErrorMessage("");
    setIsLoading(true);
    try {
      const response = await axios(url + query, {
        cancelToken: source.token,
      });
      const data = response.data;
      setResult(data);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("cancelled");
      } else {
        console.log(err);
        setResult("");
        displayError(err);
      }
    }
    setIsLoading(false);
  };

  const displayError = (err) => {
    if (err.response) {
      setErrorMessage("Enter a valid name");
    } else if (err.request) {
      setErrorMessage("Unable to complete the request");
    } else {
      setErrorMessage("Refresh the page or try again later");
    }
  };

  //set localstorage on change the state
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

  const removePokemonFromSeen = (pokemon) => {
    dispatch({
      type: "REMOVE_POKEMON_FROM_SEEN",
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
        fetchData,
        displayError,
        query,
        setQuery,
        result,
        setResult,
        errorMessage,
        PokeApiUrl,
        source,
        removePokemonFromSeen,
        isLoading,
      }}
    >
      {props.children}{" "}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
