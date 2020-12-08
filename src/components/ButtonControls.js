import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import styled from "styled-components";

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
    <Styles>
      {type === "search-page" ? (
        <Button variant="poke" onClick={() => fetchData(pokemon.url)}>
          Start the fight
        </Button>
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
          <div className="container__search">
            <Button
              variant="poke"
              disabled={disabledCaught}
              onClick={() => addPokemonToCaught(pokemon)}
            >
              Catch it!
            </Button>
            <Button
              variant="poke"
              disabled={disabledSeen}
              onClick={() => addPokemonToSeen(pokemon)}
            >
              Add to Seen
            </Button>
          </div>
        )
      ) : (
        ""
      )}

      {type === "seen-page" ? (
        <div className="container__seen">
          <Button
            variant="poke"
            disabled={disabledCaught}
            onClick={() => addPokemonToCaught(pokemon)}
          >
            Catch it!
          </Button>
          <Button variant="poke" onClick={() => removePokemonFromSeen(pokemon)}>
            Remove
          </Button>
        </div>
      ) : (
        ""
      )}

      {type === "caught-page" ? (
        <div className="container__caught">
          <Button
            variant="poke"
            onClick={() => removePokemonFromCaught(pokemon)}
          >
            Free it
          </Button>
          <Link className="caught__link" to={"/" + pokemon.id}>
            More Details
          </Link>
        </div>
      ) : (
        ""
      )}
    </Styles>
  );
};

const Styles = styled.div`
  .container__seen,
  .container__search {
    display: flex;
    justify-content: space-between;
  }
  .container__caught {
    display: flex;
    align-items: center;
    .caught__link {
      margin-left: 20px;
      text-decoration: none;
      color: #63e0a7;
      font-size: 0.6rem;
      &:hover {
        color: #30a7d7;
      }
    }
  }
  .btn-poke {
    background-color: #63e0a7;
    &:hover {
      background-color: #30a7d7;
      color: white;
    }
  }
`;

export default ButtonControls;
