import { useQuery, gql } from "@apollo/client";

const CharactersList = gql`
  query characters1 {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharacters = () => {
  const { error, loading, data } = useQuery(CharactersList);

  return {
    error,
    loading,
    data,
  };
};

export default useCharacters;
