const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Book{
        id: String!
        name: String
    }
    type Query {
        books: [Book]
        book(id: String): Book
    }
`);

export { schema };
