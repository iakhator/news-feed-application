import AppDispatcher from '../dispatcher/AppDispatcher';

class AuthActions {
	logIn(){
		AppDispatcher.dispatch({
			type: "AUTH_LOGIN",
		})
	}

	logOut() {
		AppDispatcher.dispatch({
			type: "AUTH_LOGOUT"
		})
	}
}

const authActions = new AuthActions();
export default authActions;
