import React, { useState, useEffect } from "react";
import axios from "axios";
import ChangeIndexButton from "./ChangeIndexButton";
import SearchControls from "./SearchControls";
import DisplayGrid from "./DisplayGrid";
import styled from "styled-components";

//bootstrap
import { Container } from "react-bootstrap";

const SearchPage = () => {
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

  //display all pokemon (20 max results)
  useEffect(() => {
    fetchData(PokeApiUrl);
    // eslint-disable-next-line
  }, []);

  //if there is no search, it displays the button
  const NextButton = result ? (
    result.results ? (
      <ChangeIndexButton
        disabled={!result.next}
        text="Next"
        changeIndex={() => fetchData(result.next)}
      />
    ) : (
      ""
    )
  ) : (
    ""
  );
  const PrevButton = result ? (
    result.results ? (
      <ChangeIndexButton
        disabled={!result.previous}
        text="Previous"
        changeIndex={() => fetchData(result.previous)}
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
        <SearchControls
          onChange={onChange}
          handleSubmit={handleSubmit}
          query={query}
        />
        <Container className="d-flex justify-content-between">
          {PrevButton}
          {NextButton}
        </Container>
        <DisplayGrid
          type="search-page"
          fetchData={fetchData}
          result={result}
          errorMessage={errorMessage}
        />

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

export default SearchPage;
