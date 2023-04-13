import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot
} from '@google-cloud/firestore';
import { instanceToPlain } from 'class-transformer';
import { firestore } from '../../../firebase';

export class Author {
  public id?: string;
  public name: string;
  public age: number;
}

const converter: FirestoreDataConverter<Author> = {
  toFirestore(author: Author): DocumentData {
    return instanceToPlain(author);
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): any {
    const data = snapshot.data();

    return {
      id: snapshot.id,
      ...data
    };
  }
};

export const authorCollection = () => {
  return firestore.collection('authors').withConverter(converter);
};
