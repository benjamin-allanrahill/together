import {useEffect, useState} from 'react';
import Contacts, {Contact} from 'react-native-contacts';
import {firestore} from './config';

export const getAllContacts = async () => {
  try {
    const contacts = await Contacts.getAll();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

export const useContacts = (firebaseUserID: string | undefined) => {
  const [contacts, setContacts] = useState<Contact[] | undefined>();

  useEffect(() => {
    (async function getContacts() {
      const newContacts = await getAllContacts();
      setContacts(newContacts);
    })();
  }, [firebaseUserID]);

  // write the contacts to firestore
  if (contacts && firebaseUserID) {
    var batch = firestore.batch();
    console.log('Adding contacts to firestore');
    contacts.forEach((contact) => {
      const docRef = firestore
        .collection('users')
        .doc(firebaseUserID)
        .collection('ios_contacts')
        .doc();

      batch.set(docRef, contact);
    });

    // commit all the contacts to the collection
    batch.commit();
  }
  return contacts;
};
