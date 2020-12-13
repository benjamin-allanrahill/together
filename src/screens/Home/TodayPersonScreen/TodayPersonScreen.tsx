import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  HomeScreens,
  HomeStackParamsList,
} from 'navigators/HomeNavigator/HomeNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';

type TodayPersonScreenNavProp = StackNavigationProp<
  HomeStackParamsList,
  HomeScreens.TodayPerson
>;

interface TodayPersonScreenProps {
  navigation: TodayPersonScreenNavProp;
}
export const TodayPersonScreen: React.FC<TodayPersonScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <Text> This is the today Person screen </Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate(HomeScreens.Home)}
      />
    </SafeAreaView>
  );
};
