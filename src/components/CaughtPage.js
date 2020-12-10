import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";

import styled from "styled-components";
import { Container } from "react-bootstrap";

const CaughtPage = () => {
  const { caught } = useContext(PokemonContext);

  return (
    <Container className="d-flex flex-column">
      <H5>You have caught {caught.length} pokemon</H5>
      <DisplayGrid type="caught-page" caught={caught} />
    </Container>
  );
};

const H5 = styled.h5`
  align-self: flex-end;
  background-color: #fa6555;
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px;
`;

export default CaughtPage;
