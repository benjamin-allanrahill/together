import {useEffect, useState} from 'react';
import firebase from 'firebase';
import {auth} from './config';

export const useAuth = () => {
  const [user, updateUser] = useState<firebase.User | null>();
  useEffect(() => {
    auth.onAuthStateChanged((fb_user) => {
      if (fb_user) {
        // user is signed in
        console.log('The user auth state has changed');
        updateUser(fb_user);
      }
    });
  });
  return user;
};
