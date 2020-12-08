import React from "react";
import DisplayCard from "./DisplayCard";

import { CardGroup, Row, Container, Button } from "react-bootstrap";

const DisplayGrid = ({
  result,
  fetchData,
  errorMessage,
  type,
  seen,
  caught,
  url,
}) => {
  return (
    <Container>
      <Row className="d-flex flex-column">
        {type === "search-page" ? (
          result ? (
            result.results ? (
              <CardGroup className="justify-content-around">
                {result.results.map((pokemon) => (
                  <DisplayCard
                    type={type}
                    fetchData={fetchData}
                    key={pokemon.name}
                    pokemon={pokemon}
                  />
                ))}
              </CardGroup>
            ) : (
              <>
                <Button
                  style={{ maxWidth: "5rem" }}
                  variant="outline-secondary"
                  onClick={() => fetchData(url)}
                >
                  Back
                </Button>
                <DisplayCard type="search-pokemon" url={url} pokemon={result} />
              </>
            )
          ) : (
            errorMessage
          )
        ) : (
          ""
        )}

        {type === "seen-page" ? (
          <CardGroup className="justify-content-around">
            {seen.map((pokemon) => (
              <DisplayCard type={type} pokemon={pokemon} key={pokemon.id} />
            ))}
          </CardGroup>
        ) : (
          ""
        )}

        {type === "caught-page" ? (
          <Container>
            <CardGroup className="justify-content-around">
              {caught.map((pokemon) => (
                <DisplayCard type={type} pokemon={pokemon} key={pokemon.id} />
              ))}
            </CardGroup>
          </Container>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default DisplayGrid;
