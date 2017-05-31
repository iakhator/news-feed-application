import { firebaseAuth, provider } from '../config/firebase-config';

export default {
	login: () => {
		return firebaseAuth.signInWithPopup(provider).then(function (result) {
			const token = result.credential.accessToken;
			const user = result.user;
			console.log(user.displayName)
			console.log(token)
		}).catch(function (error) {
			console.log(error);
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.email;
            // const credential = error.credential;
		});
	}
}