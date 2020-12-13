import {StackNavigationProp} from '@react-navigation/stack';
import {
  AuthFlowScreens,
  AuthStackParamsList,
} from 'navigators/AuthFlowNavigator/Props';
import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';

// Can also be thought of as the welcome screen

// define the props for the screen so we can use the navigation

type SplashScreenNavigationProps = StackNavigationProp<
  AuthStackParamsList,
  AuthFlowScreens.Splash
>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProps;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 45, marginBottom: 50}}>together</Text>
    <Button
      title="log in"
      onPress={() => navigation.navigate(AuthFlowScreens.Login)}
    />
    <Button
      title="create an account"
      onPress={() => navigation.navigate(AuthFlowScreens.Register)}
    />
  </SafeAreaView>
);
