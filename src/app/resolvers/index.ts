import { CreateBook, booksResolver } from './books';
import { CreateAuthor, authorsResolver } from './authors';
const rootResolver = {
  Query: { ...booksResolver, ...authorsResolver },
  Book: { author: authorsResolver.author },
  Author: { books: booksResolver.books },
  Mutation: {
    CreateAuthor: async (parent: any, args: any) => await CreateAuthor(args),
    CreateBook: async (parent: any, args: any) => await CreateBook(args)
  }
};
export default rootResolver;
