import React, { useEffect, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import { Container, Row, Col, Image, Card } from "react-bootstrap";
import styled from "styled-components";
import cardImg from "../img/cardBackground.png";
import fallbackImg from "../img/pokeball-2.png";

const DetailsPage = (props) => {
  const { fetchData, source, result } = useContext(PokemonContext);
  let id = props.match.params.details_id;

  const noData = "Date not available";
  const srcImage = result
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    : fallbackImg;

  //display all pokemon (20 max results)
  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon/", id);
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Styles>
      <Container className="d-flex justify-content-center mt-5 ">
        <Row className="container_row">
          <Col className="col" sm={12} style={{ textAlign: "center" }}>
            <Image width="200px" src={srcImage} />
            <Card className="container_card">
              <Card.Body>
                <h4>
                  {_.get(result, "name", noData).toUpperCase()} - ID{" "}
                  {_.get(result, "id", noData)}
                </h4>
                <Container
                  className="container__details stats"
                  style={{ background: "#30A7D7" }}
                >
                  <ul>
                    {result
                      ? result.stats
                        ? result.stats.map((stat) => (
                            <li key={uuidv4()}>
                              {_.get(
                                stat,
                                "stat.name",
                                "Stat name not avaiable"
                              )}{" "}
                              - {_.get(stat, "base_stat", "Stat not avaiable")}
                            </li>
                          ))
                        : ""
                      : ""}
                  </ul>
                </Container>
                <Container className="container__details types">
                  {result ? (
                    result.types ? (
                      <Row>
                        {result.types.map((type) => (
                          <Col key={uuidv4()} style={backgroundType(type)}>
                            {_.get(type, "type.name", noData)}
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      noData
                    )
                  ) : (
                    noData
                  )}
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container_row {
    border-radius: 5px;
    background-image: url(${cardImg});
    background-position: center;
    background-size: cover;
    max-width: 36rem;
    color: white;
    box-shadow: 10px 10px 15px -4px rgba(0, 0, 0, 0.75);

    .card {
      background: transparent;
    }

    .card-body {
      padding-top: 0;
    }

    .container__details {
      padding: 10px 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      text-align: left;
      .row {
        display: flex;
        justify-content: space-between;
      }
      p {
        margin: 0;
      }
      .col {
        border-radius: 5px;
        max-width: 49%;
      }
    }
    .stats li {
      font-size: 1.3rem;
      text-transform: capitalize;
    }

    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      li {
        min-width: 50%;

        @media only screen and (max-width: 500px) {
          min-width: 100%;
        }
      }
    }
  }
`;

const backgroundType = (type) => {
  const typeColors = {
    normal: "#A8A878",
    fairy: "#F0B6BC",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    dark: "#705849",
    dragon: "#7038F8",
    steel: "#B8B8D0",
  };

  if (type.type.name in typeColors) {
    return { backgroundColor: typeColors[type.type.name] };
  } else {
    return { backgroundColor: "#FA6555" };
  }
};

export default DetailsPage;
