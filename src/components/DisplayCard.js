import React from "react";
import _ from "lodash";
import ButtonControls from "./ButtonControls";

//bootstrap and default image
import { Card, Col } from "react-bootstrap";
import pokeballIcon from "../img/pokeball-2.png";

//default parameter
const noData = "Dato non disponibile";

const DisplayCard = ({ pokemon, fetchData, type }) => {
  const pokeId = pokemon.id
    ? pokemon.id
    : pokemon.url
    ? pokemon.url.slice(41, pokemon.url.length - 1)
    : {
        pokeballIcon,
      };

  return (
    <Col sm={6} md={4} lg={3} className="d-flex">
      <Card
        style={{
          width: "100%",
        }}
      >
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
        />
        <Card.Body>
          <Card.Title> {_.get(pokemon, "name", noData)} </Card.Title>
          <Card.Text>
            Cattura questo Pokemon per visualizzare le sue informazioni
          </Card.Text>
          <ButtonControls fetchData={fetchData} pokemon={pokemon} type={type} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayCard;
