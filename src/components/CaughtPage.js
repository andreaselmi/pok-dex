import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";

import { CardGroup, Row, Container } from "react-bootstrap";

const CaughtPage = () => {
  const { caught } = useContext(PokemonContext);

  return <DisplayGrid type="caught-page" caught={caught} />;
};

export default CaughtPage;
