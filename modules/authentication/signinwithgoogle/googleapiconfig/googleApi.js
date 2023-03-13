// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseGoogleConfig = {
  apiKey: "AIzaSyBI4oFqJqzIIn0aF-xpPt6SPCR10OSK5eQ",
  authDomain: "authentication-9d368.firebaseapp.com",
  projectId: "authentication-9d368",
  storageBucket: "authentication-9d368.appspot.com",
  messagingSenderId: "96807419519",
  appId: "1:96807419519:web:46a3370b52ed52baf0094a",
  measurementId: "G-E9LV1339Y0"
  // apiKey: "AIzaSyChSk-v2WNjeM0bOVhOzz339S7Io-i0DMM",
  //   authDomain: "userauth01-1ab69.firebaseapp.com",
  //   projectId: "userauth01-1ab69",
  //   storageBucket: "userauth01-1ab69.appspot.com",
  //   messagingSenderId: "425734465852",
  //   appId: "1:425734465852:web:56d45879cc6598ffa49639",
  //   measurementId: "G-BDSYML5J9K"
};

// Initialize Firebase
const secondaryApp = initializeApp(firebaseGoogleConfig, "secondary");
// const appG =()=> initializeApp(firebaseGoogleConfig);
const authG = getAuth(secondaryApp);
const provider = new GoogleAuthProvider();

const signInWithGoogle =()=>{ signInWithPopup(authG, provider)
  .then((result) => {
    console.log("sign in with google called");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName);

    async function SaveTODatabase(){}
    user.photoURL
    user.displayName
    user.email
    user.phoneNumber
    user.uid






    window.location.assign("http://localhost:3000")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log("sign in with google",error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};
export {
    signInWithGoogle
}