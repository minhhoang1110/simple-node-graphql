import admin from 'firebase-admin';
import client from 'firebase/compat/app';

import { config } from '../config';

admin.initializeApp({
  credential: admin.credential.cert(
    config.firebase.serviceAccount as admin.ServiceAccount
  )
});
client.initializeApp(config.firebase.client);

export const { auth } = admin;
export const firestore = admin.firestore();

firestore.settings({ ignoreUndefinedProperties: true });
