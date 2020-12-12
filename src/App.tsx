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
import {HomeScreen} from 'screens/HomeScreen';
import {AuthFlowNavigator} from 'navigators/AuthFlowNavigator';
import {FirebaseAuthContext, useFirebaseUser} from 'utils/context/AuthContext';

const App = () => {
  const AuthContext = useFirebaseUser();
  return (
    <FirebaseAuthContext.Provider value={AuthContext}>
      <NavigationContainer>
        {AuthContext.user && <HomeScreen />}
        {!AuthContext.user && <AuthFlowNavigator />}
      </NavigationContainer>
    </FirebaseAuthContext.Provider>
  );
};

export default App;
