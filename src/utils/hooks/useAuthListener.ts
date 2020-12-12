import {useEffect, useState} from 'react';
import firebase from 'firebase';
import {auth} from '../Firebase';

type AuthParams = [firebase.User | null, boolean];
export const useAuthListener = (): AuthParams => {
  const [user, updateUser] = useState<firebase.User | null>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((fb_user) => {
      if (fb_user) {
        // user is signed in
        console.log('The auth state has changed');
        updateUser(fb_user);
        setIsLoading(false);
      } else {
        console.log('auth has changed no user though');
        updateUser(null);
        setIsLoading(false);
      }
    });
  });
  return [user, isLoading];
};
