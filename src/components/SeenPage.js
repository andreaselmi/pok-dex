import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";

import { CardGroup, Row, Container } from "react-bootstrap";

const SeenPage = () => {
  const { watched } = useContext(PokemonContext);
  return <DisplayGrid watched={watched} type="seen-page" />;
};

export default SeenPage;
