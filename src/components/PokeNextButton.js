import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PokeNextButton = ({ fetchNextData, text, disabled }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchNextData();
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

PokeNextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PokeNextButton;
