import firebase from 'firebase';
import {firestore} from './config';

export const updateUser = async (
  fbUser: firebase.auth.UserCredential,
  username: string,
) => {
  await firestore.collection('users').doc(fbUser.user?.uid).set({
    userId: fbUser.user?.uid,
    email: fbUser.user?.email,
    username,
  });
};
