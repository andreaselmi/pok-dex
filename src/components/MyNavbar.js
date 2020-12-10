import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import styled from "styled-components";
import pokeball from "../img/pokeball.svg";
import glasses from "../img/glasses.svg";
import search from "../img/search.svg";

const MyNavbar = () => {
  const { isLoading } = useContext(PokemonContext);
  return (
    <>
      <Styles>
        <Navbar
          collapseOnSelect
          expand="md"
          className="py-0"
          bg="light"
          variant="light"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Pokédex
            </Navbar.Brand>
            {isLoading ? <span className="lds-dual-ring"></span> : ""}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">
                  <img src={search} alt="search icon" />
                  <span>Search</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/seen">
                  <img src={glasses} alt="glasses icon" />
                  <span>Seen</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/caught">
                  <img src={pokeball} alt="pokeball icon" />
                  <span>Caught</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
};

const Styles = styled.div`
  .navbar {
    background-color: #fa6555 !important;
  }
  .navbar-brand {
    font-family: "PressStart2P", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }
  .lds-dual-ring {
    display: inline-block;
    margin-right: auto;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .nav-link {
    min-width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0 !important;
    height: 80px;
    &:hover,
    &:focus,
    &:active {
      color: white !important;
      background: #e3350e;
      transition: 0.5s;
    }
  }
  img {
    width: 20px;
    color: red;
  }
`;

export default MyNavbar;
