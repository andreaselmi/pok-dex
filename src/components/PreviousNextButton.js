import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PreviousNextButton = ({ fetchNextData, text, disabled }) => {
  const [showScroll, setShowScroll] = useState(false);

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
    fetchNextData();
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Button
      disablePreviousNextButtond={disabled}
      className="btn btn-next"
      variant="outline-secondary"
      onClick={scrollTop}
    >
      {text}{" "}
    </Button>
  );
};

PreviousNextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PreviousNextButton;
