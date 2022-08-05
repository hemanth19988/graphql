import React from "react";
import CharactersList from "./pages/CharactersList";
import useCharacters from "./hooks/useCharacters";

function Routing() {
  return (
    <div>
      <CharactersList />
      <useCharacters />
    </div>
  );
}

export default Routing;
