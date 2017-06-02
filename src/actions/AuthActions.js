import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
	logIn: (user, token) => {
		AppDispatcher.dispatch({
			type: "AUTH_LOGIN",
			user,
			token
		})
	},

	logOut: () => {
		AppDispatcher.dispatch({
			type: "AUTH_LOGOUT"
		})
	}
};
