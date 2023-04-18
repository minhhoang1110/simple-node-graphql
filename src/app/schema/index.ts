const { gql } = require('apollo-server-express');
const schema = gql`
  type Author {
    id: String!
    name: String
    age: Int
    books: [Book]
  }
  type Book {
    id: String!
    name: String
    author: Author
  }
  type Query {
    books: [Book]
    book(id: String): Book
    authors: [Author]
    author(id: String): Author
  }
  type Mutation {
    CreateAuthor(name: String, age: Int): Author
    CreateBook(name: String, authorId: String): Book
  }
`;

export default schema;
