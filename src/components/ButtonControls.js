import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

const ButtonControls = ({ type, fetchData, pokemon }) => {
  const {
    addPokemonToCaught,
    addPokemonToSeen,
    removePokemonFromCaught,
    caught,
    seen,
    removePokemonFromSeen,
  } = useContext(PokemonContext);

  let caughtPokemon = caught.find((poke) => poke.name === pokemon.name);
  let seenPokemon = seen.find((poke) => poke.name === pokemon.name);

  const disabledCaught = caughtPokemon ? true : false;
  const disabledSeen = caughtPokemon ? true : seenPokemon ? true : false;

  return (
    <div>
      {type === "search-page" ? (
        <Button onClick={() => fetchData(pokemon.url)}>Start the fight</Button>
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
            Well done! You caught this pokemon
          </span>
        ) : (
          <>
            <Button
              disabled={disabledCaught}
              onClick={() => addPokemonToCaught(pokemon)}
            >
              Caught
            </Button>
            <Button
              disabled={disabledSeen}
              onClick={() => addPokemonToSeen(pokemon)}
            >
              Seen
            </Button>
          </>
        )
      ) : (
        ""
      )}

      {type === "seen-page" ? (
        <>
          <Button
            disabled={disabledCaught}
            onClick={() => addPokemonToCaught(pokemon)}
          >
            Catch it
          </Button>
          <Button onClick={() => removePokemonFromSeen(pokemon)}>Remove</Button>
        </>
      ) : (
        ""
      )}

      {type === "caught-page" ? (
        <>
          <Button onClick={() => removePokemonFromCaught(pokemon)}>
            Free it
          </Button>
          <Link to={"/" + pokemon.id}>More Details</Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ButtonControls;
