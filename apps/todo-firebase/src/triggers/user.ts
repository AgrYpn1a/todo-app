import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { db } from '../firebase-init';

export const createUserDocument = functions.auth.user().onCreate(async user => {
  const usersList = await admin.auth().listUsers();

  // first registered user should be admin
  if (usersList.users.length === 1) {
    await admin.auth().setCustomUserClaims(user.uid, {
      role: 'admin',
    });
  }

  await db.collection('users').doc(user.uid).create({
    username: null,
    name: null,
  });

  await db
    .collection('users')
    .doc(user.uid)
    .collection('userPrivate')
    .doc('info')
    .create({
      phoneNumber: user.phoneNumber,
      isComplete: false,
    });
});
