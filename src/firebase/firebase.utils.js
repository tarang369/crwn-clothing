import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyCPm8MrzithRr6l3x5zvA97hoLShMsFm5A',
  authDomain: 'crwn-db-6016d.firebaseapp.com',
  databaseURL: 'https://crwn-db-6016d.firebaseio.com',
  projectId: 'crwn-db-6016d',
  storageBucket: 'crwn-db-6016d.appspot.com',
  messagingSenderId: '73598843714',
  appId: '1:73598843714:web:dfc4642b09db263500a6db',
  measurementId: 'G-53082676DY',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error while creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
