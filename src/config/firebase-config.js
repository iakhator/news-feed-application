import * as firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY || 'AIzaSyD8gGi5DVnekif7k7sG9Vx3j149SnhozC4',
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

