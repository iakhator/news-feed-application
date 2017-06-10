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
			const user = result.user;
			const userId = result.uid;
			if (!localStorage.getItem('userId')) {
				localStorage.setItem('user', user);
				localStorage.setItem('userId', userId);
			}
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
		let currentUser = firebaseAuth.currentUser;
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
