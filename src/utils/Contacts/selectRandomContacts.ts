import {Contact} from 'react-native-contacts';

export const selectRandomContacts = (
  number: number,
  contacts: Contact[] | undefined,
): Contact[] => {
  if (contacts) {
    var randomContacts: Contact[] = [];
    for (let i = 0; i < number; i++) {
      randomContacts.push(
        contacts[Math.floor(Math.random() * contacts.length)],
      );
    }
    return randomContacts;
  }
  return [];
};
