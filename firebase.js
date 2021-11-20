import firebase from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";


//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCF3r8zq84Rrwg27eMMx55lKPRjmkIrEic",
  authDomain: "solar-galaxy-303109.firebaseapp.com",
  databaseURL: "https://solar-galaxy-303109-default-rtdb.firebaseio.com",
  projectId: "solar-galaxy-303109",
  storageBucket: "solar-galaxy-303109.appspot.com",
  messagingSenderId: "804557020360",
  appId: "1:804557020360:web:42adb0bf78ca57249819fd",
  measurementId: "G-Q8P03F4KQY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;