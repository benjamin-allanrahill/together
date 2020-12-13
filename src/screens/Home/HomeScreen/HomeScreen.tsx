import React, {useContext} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  HomeScreens,
  HomeStackParamsList,
} from 'navigators/HomeNavigator/HomeNavigator';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FirebaseAuthContext} from 'utils/context/AuthContext';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamsList,
  HomeScreens.Home
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const auth = useContext(FirebaseAuthContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Welcome {`${auth?.user?.email}`}</Text>
      <Button onPress={() => auth?.logOut} title="Log out">
        {' '}
        Log out
      </Button>
      <Button
        title="Today"
        onPress={() => navigation.navigate(HomeScreens.TodayAction)}
      />
    </SafeAreaView>
  );
};
