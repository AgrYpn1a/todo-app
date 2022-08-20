import {
  collection,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
import { UserDoc } from '@todo-app/shared/src/types/firestore';
import { firestore } from './index';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

const users = createCollection<UserDoc>('users');
const db = {
  users,
};

export default db;
