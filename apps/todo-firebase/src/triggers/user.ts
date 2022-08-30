import * as functions from 'firebase-functions';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { db } from '../firebase-init';
import { UserDoc } from '@todo-app/shared/src/types/firestore';

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user: UserRecord) => {
    await db
      .collection('users')
      .doc(user.uid)
      .create({
        displayName: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      } as UserDoc);
  });
