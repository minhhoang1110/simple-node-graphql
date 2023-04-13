import { Author, authorCollection } from '../../entities/authors';
import { Book } from '../../entities/books';

const getAuthors = async () => {
  const snapshots = await authorCollection().get();
  const authors: Author[] = snapshots.docs.map((snapshot) => snapshot.data());
  return authors;
};
const getAuthorDetail = async (id: string) => {
  const item = await authorCollection().doc(id).get();
  if (!item.exists) {
    return undefined;
  }
  const author: Author | undefined = item.data();
  return author;
};
export const authorsResolver = {
  authors: async () => await getAuthors(),
  author: async (parent: Book, args: any) => {
    const idParams: string =
      Object.entries(args).length > 0 ? (args.id as string) : parent.authorId;
    return await getAuthorDetail(idParams);
  }
};
