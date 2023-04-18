import { Author } from '../../entities/authors';
import { Book, bookCollection } from '../../entities/books';

const getBooks = async () => {
  const snapshots = await bookCollection().get();
  const books: Book[] = snapshots.docs.map((snapshot) => snapshot.data());
  return books;
};
const getBookDetail = async (id: string) => {
  const item = await bookCollection().doc(id).get();
  if (!item.exists) {
    return undefined;
  }
  const book: Book | undefined = item.data();
  return book;
};
const getBooksByAuthorId = async (authorId: string) => {
  const snapshots = await bookCollection()
    .where('authorId', '==', authorId)
    .get();
  const books: Book[] = snapshots.docs.map((snapshot) => snapshot.data());
  return books;
};
export const CreateBook = async (data: any) => {
  const { name, authorId } = data;
  const item = await bookCollection().add({ name, authorId });
  const book = await item.get();
  return book.data();
};
export const booksResolver = {
  books: async (parent: Author, args: any) => {
    if (parent && Object.entries(parent).length > 0) {
      return await getBooksByAuthorId(parent.id || '');
    }
    return await getBooks();
  },
  book: async (parent: any, args: any) => await getBookDetail(args.id as string)
};
