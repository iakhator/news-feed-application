import { firebaseAuth, provider } from '../config/firebase-config';

class Auth {
  logIn() {
    firebaseAuth.signInWithRedirect(provider);
    return firebaseAuth.getRedirectResult().then((result) => {
      return result.user;
    }).catch(error => error);
  }

  logOut() {
    return firebaseAuth.signOut();
  }
}

const auth = new Auth();
export default auth;
