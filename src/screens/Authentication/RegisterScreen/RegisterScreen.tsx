import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {
  AuthFlowScreens,
  AuthStackParamsList,
} from 'navigators/AuthFlowNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';
import {RegisterForm} from 'components/organisms';

type RegisterScreenNavigationProps = StackNavigationProp<
  AuthStackParamsList,
  AuthFlowScreens.Register
>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProps;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text> create an account </Text>
      <RegisterForm />
      <Button
        title="Login"
        onPress={() => navigation.navigate(AuthFlowScreens.Login)}
      />
    </SafeAreaView>
  );
};
