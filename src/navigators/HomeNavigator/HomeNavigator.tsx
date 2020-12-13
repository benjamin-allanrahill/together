import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export enum HomeScreens {
  Home = 'Home',
  TodayAction = 'TodayAction',
  TodayPerson = 'TodayPerson',
}

export type HomeStackParamsList = {
  Home: undefined;
  TodayAction: undefined;
  TodayPerson: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamsList>();

export const HomeNavigator: React.FunctionComponent = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen
        name={HomeScreens.Home}
        component={AuthorizeContactsScreen}
      />
      <HomeStack.Screen
        name={HomeScreens.TodayAction}
        component={SplashScreen}
      />
      <HomeStack.Screen
        name={HomeScreens.TodayPerson}
        component={LoginScreen}
      />
    </HomeStack.Navigator>
  );
};
