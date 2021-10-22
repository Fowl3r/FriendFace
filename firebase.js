import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDuuBkI21J5vx-F_CwMW4i4x08r0XyoTwU",
    authDomain: "friend-face-23e42.firebaseapp.com",
    projectId: "friend-face-23e42",
    storageBucket: "friend-face-23e42.appspot.com",
    messagingSenderId: "521908379455",
    appId: "1:521908379455:web:dfa45daa9505cdac53fd8a",
    measurementId: "G-KGLKXLNE2X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);   //links to firebase back-end
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();    // Tells firebase to use the google login

  export {auth, provider};   //explicit export
  export default db;      //db will be used in more circumstances thats why its default