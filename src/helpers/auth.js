import { firebaseAuth, provider } from '../config/firebase-config';

export default {
	logIn: () => {
		return firebaseAuth.signInWithPopup(provider).then((result) => {
			// const token = result.credential.accessToken;
			// const user = result.user;
			return result;
		}).catch((error) => {
			console.log(error.code);
		});
	},

	logOut: () => {
		return firebaseAuth.signOut().then(() => {
			 // Sign-out successful.
		}).catch(function(error) {
			// An error happened.
			console.log(error)
		})
	}
}