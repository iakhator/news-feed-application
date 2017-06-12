import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { firebaseAuth } from '../config/firebase-config';
import Auth from '../helpers/auth'


const localStorage = window.localStorage;

class AuthStore extends EventEmitter {
	constructor(props) {
		super(props);
	}

	setUser() {
		Auth.logIn();
		Auth.auth().then(function(result) {
			localStorage.setItem('user', result.displayName);
			localStorage.setItem('userId', result.uid);
		}).catch(function(error) {
			localStorage.setItem('message', error)
		});
	}

	deleteUser() {
		Auth.logOut();
		localStorage.removeItem('user');
		localStorage.removeItem('userId');
	}

	isAuthenticated() {
		const currentUser = firebaseAuth.currentUser;
		if(currentUser || localStorage.getItem('userId')) {
			return true;
		}
		return false;
	}

	handleAuthActions(action) {
		switch (action.type) {
			case "AUTH_LOGIN":
				this.setUser();
				this.emit('change');
				break;
			case "AUTH_LOGOUT":
				this.deleteUser();
				this.emit('change');
				break;
		}
	}
}

const authStore = new AuthStore();
AppDispatcher.register(authStore.handleAuthActions.bind(authStore));
export default authStore;
