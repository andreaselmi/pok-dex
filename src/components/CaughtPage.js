import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";

import { Container } from "react-bootstrap";

const CaughtPage = () => {
  const { caught } = useContext(PokemonContext);

  return (
    <Container>
      <h5 style={{ textAlign: "right" }}>
        {" "}
        hai catturato {caught.length} pokemon
      </h5>
      <DisplayGrid type="caught-page" caught={caught} />
    </Container>
  );
};

export default CaughtPage;
