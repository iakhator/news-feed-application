import firebase from 'firebase';

 // Initialize Firebase
const config = {
	apiKey:process.env.APIKEY,
	authDomain:process.env.AUTHDOMAIN,
	databaseURL:process.env.DATABASEURL,
	projectId:process.env.PROJECTID,
	storageBucket:process.env.STORAGEBUCKET,
	messagingSenderId:process.env.MESSENGINGSENDER
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();