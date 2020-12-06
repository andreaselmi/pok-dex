import React, { useEffect, useContext } from "react";
import ChangeIndexButton from "./ChangeIndexButton";
import SearchControls from "./SearchControls";
import DisplayGrid from "./DisplayGrid";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

//bootstrap
import { Container } from "react-bootstrap";

const SearchPage = () => {
  const {
    fetchData,
    result,
    query,
    setQuery,
    errorMessage,
    PokeApiUrl,
    source,
    url,
  } = useContext(PokemonContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(PokeApiUrl, query);
  };
  const onChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  //display all pokemon (20 max results)
  useEffect(() => {
    fetchData(PokeApiUrl);
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line
  }, []);

  //if there is no search, it displays the button
  const NextButton = result ? (
    result.results ? (
      <ChangeIndexButton
        disabled={!result.next}
        text="Next"
        url={result.next}
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
        url={url}
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
          url={PokeApiUrl}
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
