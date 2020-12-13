// Screen to get user to authorize contacts and add them to firestore
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  AuthFlowScreens,
  AuthStackParamsList,
} from 'navigators/AuthFlowNavigator/Props';
import {useContext} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FirebaseAuthContext} from 'utils/context';
import {getAllContacts} from 'utils/Contacts/getAllContacts';

type AuthorizeContactsScreenNavigationProps = StackNavigationProp<
  AuthStackParamsList,
  AuthFlowScreens.Contacts
>;

interface AuthorizeContactsScreenProps {
  navigation: AuthorizeContactsScreenNavigationProps;
}

export const AuthorizeContactsScreen: React.FC<AuthorizeContactsScreenProps> = () => {
  const AuthContext = useContext(FirebaseAuthContext);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Please authorize your contacts</Text>
      <Button
        title="Authorize"
        onPress={async () => {
          await getAllContacts(AuthContext?.user?.uid);
          AuthContext?.finishRegistration();
        }}
      />
    </SafeAreaView>
  );
};
