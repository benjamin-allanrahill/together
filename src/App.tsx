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
import {NavigationContainer} from '@react-navigation/native';
import {AuthFlowNavigator} from 'navigators/AuthFlowNavigator';
import {FirebaseAuthContext, useAuthContext} from 'utils/context/AuthContext';
import {HomeNavigator} from 'navigators/HomeNavigator';

const App = () => {
  const AuthContext = useAuthContext();
  return (
    <FirebaseAuthContext.Provider value={AuthContext}>
      <NavigationContainer>
        {AuthContext.user && !AuthContext.isRegistering && <HomeNavigator />}
        {(!AuthContext.user || AuthContext.isRegistering) && (
          <AuthFlowNavigator />
        )}
      </NavigationContainer>
    </FirebaseAuthContext.Provider>
  );
};

export default App;
