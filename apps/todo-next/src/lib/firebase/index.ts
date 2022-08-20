import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  collection,
  connectFirestoreEmulator,
  getFirestore,
} from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const firebaseConfig: FirebaseOptions & { emulatorsEnabled: string } =
  publicRuntimeConfig.firebaseConfig;

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const functions = getFunctions(firebaseApp);

const getCollection = (collectionPath: string) =>
  collection(firestore, collectionPath);

if (firebaseConfig.emulatorsEnabled === 'true') {
  connectAuthEmulator(auth, 'http://localhost:5001');
  connectFirestoreEmulator(firestore, 'localhost', 5002);
  connectStorageEmulator(storage, 'localhost', 5003);
  connectFunctionsEmulator(functions, 'localhost', 5004);
}

export default firebaseApp;
export { auth, firestore, storage, functions, getCollection };
