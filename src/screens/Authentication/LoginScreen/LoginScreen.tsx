import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {
  AuthFlowScreens,
  AuthStackParamsList,
} from 'navigators/AuthFlowNavigator/Props';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';
import {LoginForm} from 'components/organisms';

type LoginScreenNavigationProps = StackNavigationProp<
  AuthStackParamsList,
  AuthFlowScreens.Login
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProps;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text> LOGIN </Text>
      <LoginForm />
      <Button
        title="Register"
        onPress={() => navigation.navigate(AuthFlowScreens.Register)}
      />
    </SafeAreaView>
  );
};
