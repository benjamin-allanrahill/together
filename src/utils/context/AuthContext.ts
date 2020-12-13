import React, {useState} from 'react';
import firebase from 'firebase';
import {logOut, registerWithEmailPass, signInWithEmailPass} from 'utils/Auth';
import {auth} from 'utils/Firebase';
import {useAuthListener} from 'utils/hooks';

interface AuthContextData {
  user: firebase.User | null;
  isLoading: boolean;
  isRegistering: boolean;
  signInEmailPass: (
    email: string,
    password: string,
  ) => Promise<firebase.auth.UserCredential | undefined>;
  registerEmailPass: (
    email: string,
    password: string,
  ) => Promise<firebase.auth.UserCredential | undefined>;
  finishRegistration: () => void;
  logOut: () => Promise<void>;
}

export const FirebaseAuthContext = React.createContext<
  AuthContextData | undefined
>(undefined);

export const useAuthContext = (): AuthContextData => {
  const [user, isLoading] = useAuthListener();
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const registerEmailPass = async (email: string, password: string) => {
    try {
      const user = await registerWithEmailPass(email, password);
      if (user) {
        setIsRegistering(true);
        console.log('REGISTERING');
        return user;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const finishRegistration = () => {
    setIsRegistering(false);
  };
  return {
    user,
    isLoading,
    isRegistering,
    signInEmailPass: signInWithEmailPass,
    registerEmailPass,
    finishRegistration,
    logOut,
  };
};
