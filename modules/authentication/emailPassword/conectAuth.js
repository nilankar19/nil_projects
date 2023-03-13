// firebase authentication

import { auth } from "./loginapiconfig/firebaseOAuth";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
  } from "firebase/auth";

import { userSignUpDb } from "../../backend/db/db";
import { FirebaseError } from "firebase/app";
let isSigned = false;


function CallDb() {

}


let userProfile ={};
// async function PreviousSignedUser(callback) {
//     let asd = onAuthStateChanged(auth,(currentUser)=>{
//     isSigned = currentUser?true:false;
//     // console.log("ps isSigned state = ",isSigned);
//     callback(isSigned);
//   });
// }




const signUp = async (signUpEmail,signUpPassword) => {
  // check validation signUpEmail,signUppassword
  // console.log("hello-signup",signUpEmail,signUpPassword);
  let userSetupDb ={};

  let signUp_message = true;

    try {

      //save to database -mongodb
      console.log("email",signUpEmail);
      await userSignUpDb(signUpEmail,signUpPassword);

      // save to Firebase
      await createUserWithEmailAndPassword(auth,signUpEmail,signUpPassword)
      .then((u)=>{
        //call backend api to save signUp userData here in mongodb

        console.log("hello-signup",u.user.uid,signUpEmail,signUpPassword);
        localStorage.setItem("authentication",true);
    })

    } catch (error) {
       signUp_message = false;

      console.log("signup",error.message);
      return signUp_message
      localStorage.setItem("authentication",false)

    }

};

const signIn = async (signInEmail,signInPassword) => {
    try{

      await signInWithEmailAndPassword(auth,signInEmail,signInPassword)
      .then((u)=>{

        localStorage.setItem("authentication",true);
        console.log("after signIn call",u.user);
        isSigned=true;
        return userJson.user.uid;
      });

    } catch (error){
      isSigned = false;
      localStorage.setItem("authentication",false)
      console.log("signIn",error.message);
}};

const logOut = async () => {
    try {
      await signOut(auth).then(()=>{
        localStorage.setItem("authentication",false)
        isSigned=false;});
      console.log("logout called");
    } catch (error){
      // localStorage.setItem("authentication",true)
      console.log(error.message,"thidddd");
}};logOut();

const deleteAccount = async () => {
      try {
        await deleteUser(user).then(()=>{
          localStorage.setItem("authentication",false)

        })
      } catch (error){
       localStorage.setItem("authentication",true)
        console.log(error.message);
}};





export {
    signIn,
    signUp,
    logOut,
    deleteAccount,
    isSigned,
    // PreviousSignedUser
    };