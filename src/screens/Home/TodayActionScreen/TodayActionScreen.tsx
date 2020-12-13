import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreens, HomeStackParamsList} from 'navigators/HomeNavigator/Props';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';

type TodayActionScreenNavProp = StackNavigationProp<
  HomeStackParamsList,
  HomeScreens.TodayAction
>;

interface TodayActionScreenProps {
  navigation: TodayActionScreenNavProp;
}
export const TodayActionScreen: React.FC<TodayActionScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <Text> This is the today action screen </Text>
      <Button
        title="Person"
        onPress={() => navigation.navigate(HomeScreens.TodayPerson)}
      />
    </SafeAreaView>
  );
};
