import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSMC-Swa0Q1-CL3G-QU9ZT9KIKgqTm4Qw',
  authDomain: 'together-1606698256494.firebaseapp.com',
  databaseURL: 'https://together-1606698256494.firebaseio.com',
  projectId: 'together-1606698256494',
  storageBucket: 'together-1606698256494.appspot.com',
  messagingSenderId: '215431739747',
  appId: '1:215431739747:web:02f3ac37173396f3acbb56',
  measurementId: 'G-XX1LLF97FJ',
};
export const app = firebase.initializeApp(firebaseConfig);
