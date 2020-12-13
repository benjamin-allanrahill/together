import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FirebaseAuthContext} from 'utils/context/AuthContext';

export const HomeScreen = () => {
  const auth = useContext(FirebaseAuthContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>together is {`${auth.user?.email}`}</Text>
      <Button onPress={auth.logOut} title="Log out">
        {' '}
        Log out
      </Button>
    </SafeAreaView>
  );
};
