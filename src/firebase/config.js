import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "admin-template-ac2e4.appspot.com",
  messagingSenderId: "182492645400",
  appId: "1:182492645400:web:adef0267d2abb821d81b6d",
  measurementId: "G-898MJZWXG9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
