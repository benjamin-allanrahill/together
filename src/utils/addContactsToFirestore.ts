import {Contact} from 'react-native-contacts';
import {firestore} from './Firebase';

export const addContactsToFirestore = (
  contacts: Contact[] | undefined,
  firebaseUserID: string | undefined,
) => {
  // write the contacts to firestore
  if (contacts && firebaseUserID) {
    var batch = firestore.batch();
    console.log('Adding contacts to firestore');
    contacts.forEach((contact) => {
      const docRef = firestore
        .collection('users')
        .doc(firebaseUserID)
        .collection('ios_contacts')
        .doc(contact.recordID); // use record id so that contacts are not duplicated

      batch.set(docRef, contact);
    });

    // commit all the contacts to the collection
    batch.commit();
  }
};
