import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from 'screens/SplashScreen';
import {LoginScreen} from 'screens/LoginScreen';
import {RegisterScreen} from 'screens/RegisterScreen';

export enum AuthFlowScreens {
  Splash = 'Splash',
  Login = 'Login',
  Register = 'Register',
}

export type AuthStackParamsList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamsList>();

export const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen
        name={AuthFlowScreens.Splash}
        component={SplashScreen}
      />
      <AuthStack.Screen name={AuthFlowScreens.Login} component={LoginScreen} />
      <AuthStack.Screen
        name={AuthFlowScreens.Register}
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};
