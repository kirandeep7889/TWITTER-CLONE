import { graphql } from "../../gql";

  
  export const verifyUserGoogleTokenQuery=graphql(`#graphsql
  query VerifyUserGoogleToken($token: String!) {
      verifyGoogleToken(token:$ token)
  }
`)