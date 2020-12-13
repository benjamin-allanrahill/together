import Contacts, {Contact} from 'react-native-contacts';
import {addContactsToFirestore} from './addContactsToFirestore';

export const getAllContacts = async (firebaseUserID: string | undefined) => {
  try {
    const contacts: Contact[] = await Contacts.getAll();
    if (firebaseUserID) {
      await addContactsToFirestore(contacts, firebaseUserID);
    }
    return contacts;
  } catch (error) {
    console.log(error);
  }
};
