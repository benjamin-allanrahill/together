import {Contact} from 'react-native-contacts';
import {firestore} from '../../Firebase';

export const getContactsFromFirestore = async (
  firebaseUserID: string | undefined,
): Promise<Contact[] | undefined> => {
  // write the contacts to firestore
  if (firebaseUserID) {
    console.log('Getting contacts from firestore');
    try {
      const snapshot = await firestore
        .collection(`users/${firebaseUserID}/ios_contacts`)
        .get();
      // return an array with the data using firebase map function
      return snapshot.docs.map((doc) => doc.data()) as Contact[];
    } catch (e) {
      console.error(e);
    }
  }
};
