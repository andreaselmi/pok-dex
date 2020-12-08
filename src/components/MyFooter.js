import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const MyFooter = () => {
  return (
    <Styles style={{ marginTop: "auto" }}>
      <footer className="footer d-flex align-items-center">
        <Container>
          <Row className="text-secondary d-flex flex-nowrap">
            <Col md={4}> Powered by PokéApi </Col>
            <Col md={4} style={{ marginLeft: "auto", textAlign: "right" }}>
              {" "}
              &copy; Andrea Selmi - 2020{" "}
            </Col>
          </Row>
        </Container>
      </footer>
    </Styles>
  );
};

const Styles = styled.div`
  .footer {
    min-width: 100%;
    margin-top: 20px;
    font-family: "Nunito", sans-serif;
    font-size: 0.8rem;
    height: 3rem;
    background: #fa6555;
  }
`;

export default MyFooter;
