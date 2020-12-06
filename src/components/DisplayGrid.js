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
            <>
              <Button onClick={() => fetchData(url)}>Back</Button>
              <DisplayCard type="search-pokemon" pokemon={result} />
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
          <Row>
            {seen.map((pokemon) => (
              <DisplayCard type={type} pokemon={pokemon} key={pokemon.id} />
            ))}
          </Row>
        </CardGroup>
      ) : (
        ""
      )}

      {type === "caught-page" ? (
        <Container>
          <CardGroup className="justify-content-around">
            <Row>
              {caught.map((pokemon) => (
                <DisplayCard type={type} pokemon={pokemon} key={pokemon.id} />
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
