import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";
import { Container } from "react-bootstrap";

const SeenPage = () => {
  const { seen } = useContext(PokemonContext);
  return (
    <Container>
      <h5
        style={{ textAlign: "right" }}
      >{`Hai ${seen.length} pokemon visti, prova a catturarli!`}</h5>
      <DisplayGrid seen={seen} type="seen-page" />
    </Container>
  );
};

export default SeenPage;
