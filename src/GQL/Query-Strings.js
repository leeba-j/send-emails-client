import { gql } from "@apollo/client";

export const ALL_USERS = gql`
query AllUsers{
    getAllUsers{
      name
      email
      weight
      height
    }
  }
`;

