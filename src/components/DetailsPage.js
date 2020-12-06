import React, { useEffect, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import _ from "lodash";

import { Container, Row, Col, Image, Card } from "react-bootstrap";

const DetailsPage = (props) => {
  const { fetchData, source, PokeApiUrl, result } = useContext(PokemonContext);
  let id = props.match.params.details_id;

  const noData = "Date not available";
  const srcImage = result
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    : "";

  //display all pokemon (20 max results)
  useEffect(() => {
    fetchData(PokeApiUrl, id);
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Image width="200px" src={srcImage} rounded />
        </Col>
        <Col sm={8}>
          {result ? (
            <>
              <Card>
                <Card.Header>
                  {_.get(result, "name", noData).toUpperCase()}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {_.get(
                      result,
                      "flavor_text_entries[0].flavor_text",
                      noData
                    )}
                  </Card.Text>
                  <ul>
                    <li>base happiness: {result.base_happiness}</li>
                    <li>capture rate: {result.capture_rate}</li>
                    <li>Color: {result.color.name}</li>
                    <li>
                      Evolves from:
                      {" " +
                        JSON.stringify(
                          _.get(result, "evolves_from_species.name", noData)
                        ).toUpperCase()}
                    </li>
                    <li>Shape: {JSON.stringify(result.shape.name)}</li>
                  </ul>
                </Card.Body>
              </Card>
            </>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
