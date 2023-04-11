import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot
} from '@google-cloud/firestore';
import { instanceToPlain } from 'class-transformer';
import { firestore } from '../../../firebase';

export class Book {
  public id?: string;
  public name: string;
}

const converter: FirestoreDataConverter<Book> = {
  toFirestore(book: Book): DocumentData {
    return instanceToPlain(book);
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): any {
    const data = snapshot.data();

    return {
      id: snapshot.id,
      ...data
    };
  }
};

export const bookCollection = () => {
  return firestore.collection('books').withConverter(converter);
};
