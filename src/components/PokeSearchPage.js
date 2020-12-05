import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeDisplayCard from "./PokeDisplayCard";
import PokeNextButton from "./PokeNextButton";
import styled from "styled-components";

//bootstrap
import {
  Container,
  InputGroup,
  Form,
  FormGroup,
  FormControl,
  Button,
  CardGroup,
  Row,
} from "react-bootstrap";

const PokeSearchPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const PokeApiUrl = "https://pokeapi.co/api/v2/pokemon-species/";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(PokeApiUrl);
  };

  const fetchData = async (url) => {
    try {
      const response = await axios(url + query);
      const data = response.data;
      setResult(data);
    } catch (err) {
      console.log(err);
      setResult("");
      displayError(err);
    }
  };

  const displayError = (err) => {
    if (err.response) {
      setErrorMessage("Inserisci un nome valido");
    } else if (err.request) {
      setErrorMessage("Impossibile completare la ricerca");
    } else {
      setErrorMessage("Aggiorna la pagina o riprova più tardi");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  //display next 20 pokemon
  const fetchNextData = (url) => {
    fetchData(url);
  };

  //display all pokemon (20 max results)
  useEffect(() => {
    fetchData(PokeApiUrl);
    // eslint-disable-next-line
  }, []);

  //if there is no search, it displays the button
  const NextButton = result ? (
    result.results ? (
      <PokeNextButton
        disabled={!result.next}
        text="Next"
        fetchNextData={() => fetchNextData(result.next)}
      />
    ) : (
      ""
    )
  ) : (
    ""
  );
  const PrevButton = result ? (
    result.results ? (
      <PokeNextButton
        disabled={!result.previous}
        text="Previous"
        fetchNextData={() => fetchNextData(result.previous)}
      />
    ) : (
      ""
    )
  ) : (
    ""
  );

  return (
    <Styles>
      <Container className="d-flex flex-column">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup
              className="mt-3"
              style={{ maxWidth: "800px", margin: "auto" }}
            >
              <FormControl
                onChange={onChange}
                value={query}
                placeholder="Cerca il tuo pokemon preferito..."
                aria-label="Cerca il tuo pokemon preferito..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  type="submit"
                  variant="outline-secondary"
                  className="btn"
                >
                  Button
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Form>
        <Container className="d-flex justify-content-between">
          {PrevButton}
          {NextButton}
        </Container>
        <div>
          {result ? (
            result.results ? (
              <CardGroup className="justify-content-around">
                <Row>
                  {result.results.map((pokemon) => (
                    <PokeDisplayCard key={pokemon.name} pokemon={pokemon} />
                  ))}
                </Row>
              </CardGroup>
            ) : (
              <PokeDisplayCard pokemon={result} />
            )
          ) : (
            errorMessage
          )}
        </div>
        <Container className="d-flex justify-content-between">
          {PrevButton}
          {NextButton}
        </Container>
      </Container>
    </Styles>
  );
};

//styles
const Styles = styled.div`
  .btn {
    &:hover {
      background-color: #e3350e !important;
    }
  }
  .btn-next {
    width: 100px;
    margin: 10px;
  }
`;

export default PokeSearchPage;
