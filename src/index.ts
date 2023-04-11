import * as functions from 'firebase-functions';
import { app } from './app';
export const api = functions
  .runWith({ timeoutSeconds: 120 })
  .region('asia-southeast1')
  .https.onRequest(app);
