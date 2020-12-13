import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'screens/Home/HomeScreen';
import {TodayActionScreen} from 'screens/Home/TodayActionScreen';
import {TodayPersonScreen} from 'screens/Home/TodayPersonScreen';

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
      <HomeStack.Screen name={HomeScreens.Home} component={HomeScreen} />
      <HomeStack.Screen
        name={HomeScreens.TodayAction}
        component={TodayActionScreen}
      />
      <HomeStack.Screen
        name={HomeScreens.TodayPerson}
        component={TodayPersonScreen}
      />
    </HomeStack.Navigator>
  );
};
