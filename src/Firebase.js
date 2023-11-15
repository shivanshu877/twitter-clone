import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB2kAJ-Wb01gX33BK38bo8wkWKi85ZW6Fg",
    authDomain: "twitter-clone-80fc1.firebaseapp.com",
    projectId: "twitter-clone-80fc1",
    storageBucket: "twitter-clone-80fc1.appspot.com",
    messagingSenderId: "566065699486",
    appId: "1:566065699486:web:5ec786de592ab27fb2398f"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const db = firebaseApp.firestore();
  export default db; 