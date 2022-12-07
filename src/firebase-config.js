/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 //import { initializeApp } from "firebase/app";
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDwBNu8TlV4KqIwVeDvir3uuvMtLANcMRA",
  authDomain: "fir-js-crud-a72e7.firebaseapp.com",
  projectId: "fir-js-crud-a72e7",
  storageBucket: "fir-js-crud-a72e7.appspot.com",
  messagingSenderId: "559352586840",
  appId: "1:559352586840:web:2d637ee1a80eec7eff602d"
};

// Initialize Firebase
//const app = initializeApp(Config);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
