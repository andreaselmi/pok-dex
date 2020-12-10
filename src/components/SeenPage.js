import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";

import styled from "styled-components";
import { Container } from "react-bootstrap";

const SeenPage = () => {
  const { seen } = useContext(PokemonContext);
  return (
    <Container className="d-flex flex-column">
      <H5>{`You have seen ${seen.length} pokemon`}</H5>
      <DisplayGrid seen={seen} type="seen-page" />
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

export default SeenPage;
