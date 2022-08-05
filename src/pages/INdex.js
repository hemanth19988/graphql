import React from "react";
import { useParams } from "react-router-dom";
import useCharacterByID from "../hooks/useCharacterByID";

const INdex = () => {
  const { id } = useParams();

  const { error, loading, data } = useCharacterByID(id);
  console.log(data);
  if (error) return <>{error}</>;
  return (
    <div>
      {!loading && data ? (
        <>
          <p>{data.character?.id}</p>
          <p>{data.character?.name}</p>
          <p>{data.character?.species}</p>
          <p>{data.character?.type}</p>
          <p>{data.character?.gender}</p>
          <p>{data.character?.origin.id}</p>
        </>
      ) : null}
    </div>
  );
};

export default INdex;
