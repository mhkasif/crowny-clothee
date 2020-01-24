import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7dNxglBX4SPLSHuKujYWpTOm-3tQEo3A",
  authDomain: "crown-clothee.firebaseapp.com",
  databaseURL: "https://crown-clothee.firebaseio.com",
  projectId: "crown-clothee",
  storageBucket: "crown-clothee.appspot.com",
  messagingSenderId: "762387509321",
  appId: "1:762387509321:web:762bbf29376ac5af760f98",
  measurementId: "G-DH3EQV2K6K"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//provider could be google facebook etc
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//   popup should be of provider eg gogole fb etc
export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;   
};
export default firebase;
