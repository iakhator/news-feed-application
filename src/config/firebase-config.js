import firebase from 'firebase';

 // Initialize Firebase
const config = {
  apiKey: process.env.API_KEY || 'AIzaSyDhs8AHmc5d8wumLXaIpeQWG8JFbvQg8vc',
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
