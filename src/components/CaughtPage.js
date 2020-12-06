import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayCard from "./DisplayCard";

import { CardGroup, Row, Container } from "react-bootstrap";

const CaughtPage = () => {
  const { caught } = useContext(PokemonContext);

  return (
    <Container>
      <CardGroup className="justify-content-around">
        <Row>
          {caught.map((pokemon) => (
            <DisplayCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default CaughtPage;
