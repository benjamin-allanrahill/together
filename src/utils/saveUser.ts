import firebase from 'firebase';
import {firestore} from './Firebase';

export const updateUser = async (fbUser: firebase.auth.UserCredential) => {
  await firestore.collection('users').doc(fbUser.user?.uid).set({
    userId: fbUser.user?.uid,
    email: fbUser.user?.email,
  });
};
