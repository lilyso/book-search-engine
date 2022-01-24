import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: ID!
    $authors: [String!]
    $description: String!
    $image: String!
    $link: String!
  ) {
    addBook(
      bookId: $bookId
      authors: $authors
      description: $description
      image: $image
      link: $link
    ) {
      bookId
      authors
      description
      image
      link
    }
  }
`;

//check this
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(book: $bookId) {
      bookid
    }
  }
`;
