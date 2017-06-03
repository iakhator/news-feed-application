import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { firebaseAuth } from '../config/firebase-config';

const localStorage = window.localStorage;

function setUser(user, userId) {
	if (!localStorage.getItem('userId')) {
		localStorage.setItem('user', user);
		localStorage.setItem('userId', userId);
	}
}

function deleteUser() {
	localStorage.removeItem('user');
	localStorage.removeItem('userId');
}

class AuthStore extends EventEmitter {
	constructor(props) {
		super(props);
	}

	isAuthenticated() {
		let currentUser = firebaseAuth.currentUser;
		if(currentUser || localStorage.getItem('userId')) {
			return true;
		}
		return false;
	}

	getUser() {
	    return localStorage.getItem('user')
	}


	handleAuthActions(action) {
		switch (action.type) {
			case "AUTH_LOGIN":
				setUser(action.user, action.token);
				this.emit('change');
				break;
			case "AUTH_LOGOUT":
				deleteUser();
				this.emit('change');
				break;
		}
	}
}

const authStore = new AuthStore();
AppDispatcher.register(authStore.handleAuthActions.bind(authStore));
export default authStore;
