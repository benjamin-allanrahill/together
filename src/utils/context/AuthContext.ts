import React from 'react';
import firebase from 'firebase';
import {logOut, registerWithEmailPass, signInWithEmailPass} from 'utils/Auth';
import {auth} from 'utils/Firebase';
import {useAuthListener} from 'utils/hooks';

interface AuthContextData {
  user: firebase.User | null;
  isLoading: boolean;
  signInEmailPass: (
    email: string,
    password: string,
  ) => Promise<firebase.auth.UserCredential | undefined>;
  registerEmailPass: (
    email: string,
    password: string,
    username: string,
  ) => Promise<firebase.auth.UserCredential | undefined>;
  logOut: () => Promise<void>;
}
export const FIREBASE_DEFAULT: AuthContextData = {
  user: null,
  isLoading: false,
  signInEmailPass: signInWithEmailPass,
  registerEmailPass: registerWithEmailPass,
  logOut,
};

export const FirebaseAuthContext = React.createContext<AuthContextData>(
  FIREBASE_DEFAULT,
);

export const useFirebaseUser = (): AuthContextData => {
  const {signInEmailPass, registerEmailPass} = FIREBASE_DEFAULT;
  const [user, isLoading] = useAuthListener();

  return {
    user,
    isLoading,
    signInEmailPass,
    registerEmailPass,
    logOut,
  };
};
