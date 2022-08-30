import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase-admin/app';

const app = initializeApp();
const db = getFirestore(app);

export { db };
