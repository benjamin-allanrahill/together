import firebase from 'firebase';
import {firestore} from './Firebase';

export const updateUser = async (fbUser: firebase.User) => {
  await firestore.collection('users').doc(fbUser.uid).set({
    userId: fbUser.uid,
    email: fbUser.email,
  });
};
