import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from 'screens/SplashScreen';
import {LoginScreen} from 'screens/LoginScreen';
import {RegisterScreen} from 'screens/RegisterScreen';
import {AuthorizeContactsScreen} from 'screens/Registration/AuthorizeContacts/AuthorizeContactsScreen';
import {FirebaseAuthContext} from 'utils/context';

export enum AuthFlowScreens {
  Splash = 'Splash',
  Login = 'Login',
  Register = 'Register',
  Contacts = 'Contacts',
}

export type AuthStackParamsList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Contacts: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamsList>();

export const AuthFlowNavigator: React.FunctionComponent = () => {
  const AuthContext = useContext(FirebaseAuthContext);

  console.log(AuthContext?.isRegistering);

  return (
    <AuthStack.Navigator headerMode="none">
      {AuthContext?.isRegistering ? (
        <AuthStack.Screen
          name={AuthFlowScreens.Contacts}
          component={AuthorizeContactsScreen}
        />
      ) : (
        <>
          <AuthStack.Screen
            name={AuthFlowScreens.Splash}
            component={SplashScreen}
          />
          <AuthStack.Screen
            name={AuthFlowScreens.Login}
            component={LoginScreen}
          />
          <AuthStack.Screen
            name={AuthFlowScreens.Register}
            component={RegisterScreen}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
