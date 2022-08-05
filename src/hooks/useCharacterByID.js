import { useQuery, gql } from "@apollo/client";

const c = gql`
  query query6($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      image
      created
    }
  }
`;
const useCharacterByID = (id) => {
  const { error, loading, data } = useQuery(c, {
    variables: { id },
  });
  return { data, loading, error };
};

export default useCharacterByID;
