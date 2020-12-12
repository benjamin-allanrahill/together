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
import {SplashScreen} from 'screens';
import {AuthStack} from 'screens/stackNavigators/AuthenticationStack';
import {LoginForm, RegisterForm} from 'components/organisms';
import {
  FirebaseAuthContext,
  FIREBASE_DEFAULT,
  useFirebaseUser,
} from 'utils/context/AuthContext';

const App = () => {
  const AuthContext = useFirebaseUser();
  return (
    <FirebaseAuthContext.Provider value={AuthContext}>
      <NavigationContainer>
        <AuthStack.Navigator>
          {AuthContext.user && (
            <AuthStack.Screen name="together" component={SplashScreen} />
          )}
          {!AuthContext.user && (
            <>
              <AuthStack.Screen name="login" component={LoginForm} />
              <AuthStack.Screen name="register" component={RegisterForm} />
            </>
          )}
        </AuthStack.Navigator>
      </NavigationContainer>
    </FirebaseAuthContext.Provider>
  );
};

export default App;
