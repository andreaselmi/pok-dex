import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

import { Button } from "react-bootstrap";

const ButtonControls = ({ type, fetchData, pokemon }) => {
  const {
    addPokemonToCaught,
    addPokemonToWatched,
    caught,
    watched,
  } = useContext(PokemonContext);

  let caughtPokemon = caught.find((poke) => poke.name === pokemon.name);
  let watchedPokemon = watched.find((poke) => poke.name === pokemon.name);

  const disabledCaught = caughtPokemon ? true : false;
  const disabledWatched = caughtPokemon ? true : watchedPokemon ? true : false;

  return (
    <div>
      {type === "search-page" ? (
        <Button onClick={() => fetchData(pokemon.url)}>Inizia la lotta</Button>
      ) : (
        ""
      )}

      {type === "search-pokemon" ? (
        caughtPokemon ? (
          <span
            style={{
              color: "red",
            }}
          >
            Complimenti hai catturato questo pokemon!
          </span>
        ) : (
          <>
            <Button
              disabled={disabledCaught}
              onClick={() => addPokemonToCaught(pokemon)}
            >
              Catturato
            </Button>
            <Button
              disabled={disabledWatched}
              onClick={() => addPokemonToWatched(pokemon)}
            >
              Visto
            </Button>
          </>
        )
      ) : (
        ""
      )}

      {type === "seen-pokemon" ? <span>prova a catturarlo</span> : ""}
    </div>
  );
};

export default ButtonControls;
