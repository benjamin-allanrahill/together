import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreens, HomeStackParamsList} from 'navigators/HomeNavigator/Props';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';
import {useContacts} from 'utils/hooks/Contacts';
import {selectRandomContacts} from 'utils/Contacts/selectRandomContacts';

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
  const {contacts, isLoading} = useContacts();
  return (
    <SafeAreaView>
      {isLoading && !contacts ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text> This is the today Person screen </Text>
          {selectRandomContacts(3, contacts)?.map((contact, i) => (
            <Text key={i}>{contact.givenName}</Text>
          ))}
          <Button
            title="Home"
            onPress={() => navigation.navigate(HomeScreens.Home)}
          />
        </>
      )}
    </SafeAreaView>
  );
};
