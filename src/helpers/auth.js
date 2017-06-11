import { firebaseAuth, provider } from '../config/firebase-config';

export default {
	logIn: () => {
		firebaseAuth.signInWithRedirect(provider);
	},

	auth: () => {
		return firebaseAuth.getRedirectResult().then(function(result) {
			return result;
		}).catch(function(error) {
			console.log(error)
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