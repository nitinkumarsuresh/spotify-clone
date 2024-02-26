import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmRSV8QQo5yogmKe3jHoXnfJJx18v3n68",
    authDomain: "spotify-b361f.firebaseapp.com",
    projectId: "spotify-b361f",
    storageBucket: "spotify-b361f.appspot.com",
    messagingSenderId: "878571789185",
    appId: "1:878571789185:web:3e28b54198f1abe2d7e680",
    measurementId: "G-Z4PZDER9QY"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
