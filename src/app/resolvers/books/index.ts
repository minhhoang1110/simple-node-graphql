import { bookCollection } from '../../entities/books';

const getBooks = async () => {
  const snapshots = await bookCollection().get();
  const books = snapshots.docs.map((snapshot) => snapshot.data());
  return books;
};
const getBookDetail = async (id: string) => {
  const item = await bookCollection().doc(id).get();
  if (!item.exists) {
    return undefined;
  }
  const book = item.data();
  return book;
};
export const booksResolver = {
  books: getBooks(),
  book: async (args: any) => {
    const book = await getBookDetail(args.id as string);
    return book;
  }
};
