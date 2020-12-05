import React, { useContext } from "react";
import _ from "lodash";
import { PokemonContext } from "../context/PokemonContext";

import { Card, Button, Col } from "react-bootstrap";
import pokeballIcon from "../img/pokeball-2.png";

const PokeDisplayCard = ({ pokemon }) => {
  const { addPokemonToCaught } = useContext(PokemonContext);

  const pokeId = pokemon.id
    ? pokemon.id
    : pokemon.url
    ? pokemon.url.slice(41, pokemon.url.length - 1)
    : { pokeballIcon };

  const noData = "Dato non disponibile";

  return (
    <Col sm={6} md={4} lg={3} className="d-flex">
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
        />
        <Card.Body>
          <Card.Title>{_.get(pokemon, "name", noData)} </Card.Title>
          <Card.Text>
            Cattura questo Pokemon per visualizzare le sue informazioni
          </Card.Text>
          <Button onClick={() => addPokemonToCaught(pokemon)}>Catturato</Button>
          <Button>Visto</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokeDisplayCard;
