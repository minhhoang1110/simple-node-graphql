import { booksResolver } from './books';
import { authorsResolver } from './authors';
const rootResolver = {
  Query: { ...booksResolver, ...authorsResolver },
  Book: { author: authorsResolver.author },
  Author: { books: booksResolver.books }
};
export default rootResolver;
