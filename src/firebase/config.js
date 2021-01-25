import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB9SaHIFdQwMk3wtgZRbjjDADXJhtGJru8",
    authDomain: "an-gallery.firebaseapp.com",
    databaseURL: "https://an-gallery.firebaseio.com",
    projectId: "an-gallery",
    storageBucket: "an-gallery.appspot.com",
    messagingSenderId: "759488418395",
    appId: "1:759488418395:web:a98c55796cd2412ed3257e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};