/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {LoginForm, RegisterForm} from '@oranisms';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen, splashStack} from 'screens';

const App = () => {
  return (
    <NavigationContainer>
      <splashStack.Navigator>
        <splashStack.Screen name="together" component={SplashScreen} />
        <splashStack.Screen name="login" component={LoginForm} />
        <splashStack.Screen name="register" component={RegisterForm} />
      </splashStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
