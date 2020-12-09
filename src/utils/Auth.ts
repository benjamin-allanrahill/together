import {auth, firestore} from './config';
import {updateUser} from './saveUser';

export const registerWithEmailPass = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);

    if (user) {
      //signed in
      //...
      console.log('The user is created and signed in');

      // save the user to the firestore DB
      updateUser(user, username);
      console.log('user was saved to firestore');

      addContactsToFirestore(user.user.uid);

      // return the user to the caller
      return user;
    }
  } catch (err) {
    // error in signing in
    console.error(err.code, err.message);
  }
};

export const signInWithEmailPass = async (email: string, password: string) => {
  try {
    const user = auth.signInWithEmailAndPassword(email, password);

    if (user) {
      //signed in
      //...
      console.log('The user is signed in');
      return user;
    }
  } catch (err) {
    console.error(err.code, err.message);
  }
};
