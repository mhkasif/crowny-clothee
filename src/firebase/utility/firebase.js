import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
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

  firebase.initializeApp(firebaseConfig)
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  //provider could be google facebook etc
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
//   popup should be of provider eg gogole fb etc
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;