import { gql } from "@apollo/client";

export const CREATE_USER_AND_SEND_EMAIL = gql`
mutation CreateUser($userDetails: UserDetailsInputObject! ){
    createUser(userDetails: $userDetails)
  }
`;

