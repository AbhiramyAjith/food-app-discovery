import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBP2cVuhOXdLnV2GI-iCrXcFTCBhsyWw7A",
    authDomain: "crwn-db-8dcbd.firebaseapp.com",
    projectId: "crwn-db-8dcbd",
    storageBucket: "crwn-db-8dcbd.appspot.com",
    messagingSenderId: "112683306650",
    appId: "1:112683306650:web:f52155d3fd4a7990dd9923",
    measurementId: "G-LZC341PY5S"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
