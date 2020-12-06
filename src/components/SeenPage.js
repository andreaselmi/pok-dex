import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DisplayGrid from "./DisplayGrid";

const SeenPage = () => {
  const { seen } = useContext(PokemonContext);
  return <DisplayGrid seen={seen} type="seen-page" />;
};

export default SeenPage;
