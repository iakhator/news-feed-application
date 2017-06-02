import { firebaseAuth, provider } from '../config/firebase-config';

export default {
	logIn: () => {
		return firebaseAuth.signInWithPopup(provider).then((result) => {
			// const token = result.credential.accessToken;
			// const user = result.user;
			return result;
		});
	},

	logOut: () => {
		return firebaseAuth.signOut();
	}
}