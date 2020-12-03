import React, {useState} from 'react';
import {SafeAreaView, Text, Button, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {getPhotosFromCRoll} from 'utils/iosPhotos';

type SplashStackParamsList = {
  together: undefined;
  login: undefined;
  register: undefined;
};
export const splashStack = createStackNavigator<SplashStackParamsList>();

type SplashScreenNavigationProp = StackNavigationProp<
  SplashStackParamsList,
  'together'
>;

type SplashPageProps = {
  navigation: SplashScreenNavigationProp;
};

export const SplashScreen = ({navigation}: SplashPageProps) => {
  const [images, setImages] = useState<CameraRoll.PhotoIdentifier[] | null>(
    null,
  );
  return (
    <SafeAreaView>
      <Button title="log in" onPress={() => navigation.navigate('login')} />
      <Button
        title="create an account"
        onPress={() => navigation.navigate('register')}
      />
    </SafeAreaView>
  );
};
