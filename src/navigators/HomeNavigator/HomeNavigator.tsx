import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'screens/Home/HomeScreen';
import {TodayActionScreen} from 'screens/Home/TodayActionScreen';
import {TodayPersonScreen} from 'screens/Home/TodayPersonScreen';
import {HomeScreens, HomeStackParamsList} from './Props';

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
