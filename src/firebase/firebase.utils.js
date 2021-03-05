import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCPrvwAbBDeOY41GkOz2hplRs6q3ZACOpc",
  authDomain: "crwn-db-brunno.firebaseapp.com",
  projectId: "crwn-db-brunno",
  storageBucket: "crwn-db-brunno.appspot.com",
  messagingSenderId: "994555916444",
  appId: "1:994555916444:web:1049ef5143b5a583c47d59",
  measurementId: "G-TR6Q16YDEH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;