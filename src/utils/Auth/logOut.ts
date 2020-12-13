import {auth} from '../Firebase';

export const logOut = async () => {
  console.log('THe user is being signed out');
  try {
    await auth.signOut();
  } catch (err) {
    console.error(err);
  }
};
