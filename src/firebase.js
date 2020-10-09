import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3jsTJ8VZNowMctzcL3k5GdALifRMZ4kM",
    authDomain: "tinder-clone-dcd27.firebaseapp.com",
    databaseURL: "https://tinder-clone-dcd27.firebaseio.com",
    projectId: "tinder-clone-dcd27",
    storageBucket: "tinder-clone-dcd27.appspot.com",
    messagingSenderId: "188855085961",
    appId: "1:188855085961:web:0b4999e9f4ae15574f8f58",
    measurementId: "G-PDZC50J9ZN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore(); 

export default database;