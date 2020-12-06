import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { PokemonContext } from "../context/PokemonContext";

const ChangeIndexButton = ({ text, disabled, url }) => {
  const [showScroll, setShowScroll] = useState(false);
  const { fetchData } = useContext(PokemonContext);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchData(url);
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Button
      disabled={disabled}
      className="btn btn-next"
      variant="outline-secondary"
      onClick={scrollTop}
    >
      {text}
    </Button>
  );
};

ChangeIndexButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ChangeIndexButton;
