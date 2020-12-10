import React from "react";
import _ from "lodash";
import ButtonControls from "./ButtonControls";

//bootstrap, styled and default image
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import fallbackImg from "../img/pokeball-2.png";
import cardImg from "../img/cardBackground.png";

const urlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const DisplayCard = ({ pokemon, fetchData, type, url }) => {
  const checkUrlImg = () => {
    if (pokemon.id) {
      return urlImg + pokemon.id + ".png";
    } else if (pokemon.url) {
      return urlImg + pokemon.url.slice(41, pokemon.url.length - 1) + ".png";
    } else {
      return fallbackImg;
    }
  };

  return (
    <Styles>
      <Col className="d-flex justify-content-center my-3 p-0">
        <Card className="mycard">
          <Card.Img variant="top" src={checkUrlImg()} />
          <Card.Body>
            <Card.Title>
              {_.get(pokemon, "name", "Pokemon's name not available")}
            </Card.Title>
            <Card.Text>
              {type === "caught-page"
                ? _.get(
                    pokemon,
                    "flavor_text_entries[0].flavor_text",
                    "Description not available"
                  )
                : "Capture this pokemon to view its information"}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ border: "none" }}>
            <ButtonControls
              fetchData={fetchData}
              pokemon={pokemon}
              type={type}
            />
          </Card.Footer>
        </Card>
      </Col>
    </Styles>
  );
};

//style
const Styles = styled.div`
  .mycard {
    box-shadow: 10px 10px 15px -4px rgba(0, 0, 0, 0.75);
    width: 18rem;
    height: 35rem;
    color: white;
    font-family: PressStart2P, "sans-serif";
    background-image: url(${cardImg});
    background-position: center;
    background-size: cover;
    .card-body {
      overflow: scroll;
      .card-title {
        font-size: 1.5rem;
        text-transform: capitalize;
      }
      p {
        font-size: 0.8rem;
      }
    }
    .card-footer {
      font-size: 0.5rem;
      .btn {
        font-size: 0.6rem;
      }
    }
  }
`;

export default DisplayCard;
