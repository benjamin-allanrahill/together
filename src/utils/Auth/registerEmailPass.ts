import {auth} from '../config';
import {updateUser} from '../saveUser';

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

      // return the user to the caller
      return user;
    }
  } catch (err) {
    // error in signing in
    console.error(err.code, err.message);
  }
};
