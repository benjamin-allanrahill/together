import React, {useEffect, useState} from 'react';
import {Contact} from 'react-native-contacts';
import {getContactsFromFirestore} from 'utils/Contacts/Firebase/getContactsFromFirestore';
import {useAuthContext} from 'utils/context';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const AuthContext = useAuthContext();

  useEffect(() => {
    setIsLoading(true);

    //define async helper
    const fetchContacts = async () => {
      setContacts(await getContactsFromFirestore(AuthContext.user?.uid));
      setIsLoading(false);
    };
    // call the helper to get the contacts
    fetchContacts();
  });
};
