import React from "react";
import DisplayCard from "./DisplayCard";

import { CardGroup, Row, Container } from "react-bootstrap";

const DisplayGrid = ({ result, fetchData, errorMessage, type, watched }) => {
  return (
    <Container>
      {type === "search-page" ? (
        result ? (
          result.results ? (
            <CardGroup className="justify-content-around">
              <Row>
                {result.results.map((pokemon) => (
                  <DisplayCard
                    type={type}
                    fetchData={fetchData}
                    key={pokemon.name}
                    pokemon={pokemon}
                  />
                ))}
              </Row>
            </CardGroup>
          ) : (
            <DisplayCard type="search-pokemon" pokemon={result} />
          )
        ) : (
          errorMessage
        )
      ) : (
        ""
      )}

      {type === "seen-page" ? (
        <Container>
          <CardGroup className="justify-content-around">
            <Row>
              {watched.map((pokemon) => (
                <DisplayCard pokemon={pokemon} key={pokemon.id} />
              ))}
            </Row>
          </CardGroup>
        </Container>
      ) : (
        ""
      )}
    </Container>
  );
};

export default DisplayGrid;
