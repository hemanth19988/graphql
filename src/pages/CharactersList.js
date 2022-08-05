import React from "react";
import useCharacters from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import "./CharacterList.css";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  return (
    <div className="CharacterList">
      {!loading && data
        ? data.characters.results.map((character) => {
            return (
              <div>
                <Link to={`/${character.id}/index`}>
                  <img src={character.image} />
                </Link>

                <h2>{character.name}</h2>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CharactersList;
