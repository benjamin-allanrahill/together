import {auth} from '../Firebase';

export const signInWithEmailPass = async (email: string, password: string) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
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
