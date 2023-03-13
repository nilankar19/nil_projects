import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyChSk-v2WNjeM0bOVhOzz339S7Io-i0DMM",
    authDomain: "userauth01-1ab69.firebaseapp.com",
    projectId: "userauth01-1ab69",
    storageBucket: "userauth01-1ab69.appspot.com",
    messagingSenderId: "425734465852",
    appId: "1:425734465852:web:56d45879cc6598ffa49639",
    measurementId: "G-BDSYML5J9K"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);