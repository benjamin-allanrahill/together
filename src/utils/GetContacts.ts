import Contacts from 'react-native-contacts';

export const getAllContacts = async () => {
  try {
    const contacts = await Contacts.getAll();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};
