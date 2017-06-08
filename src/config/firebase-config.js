import firebase from 'firebase';

 // Initialize Firebase
const config = {
	apiKey: "AIzaSyDhs8AHmc5d8wumLXaIpeQWG8JFbvQg8vc",
	authDomain: "newsapi-92675.firebaseapp.com",
	databaseURL: "https://newsapi-92675.firebaseio.com",
	projectId: "newsapi-92675",
	storageBucket: "newsapi-92675.appspot.com",
	messagingSenderId: "1044626272706"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();