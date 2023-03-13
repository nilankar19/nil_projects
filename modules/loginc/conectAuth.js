// firebase authentication
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
  } from "firebase/auth";
import { auth } from "./loginapiconfig/firebaseOAuth";
let isSigned = false;
onAuthStateChanged(auth,(currentUser)=>{

    if(currentUser){
      console.log("user signedin",currentUser.email);
      isSigned = true;

    }else{
      console.log("user signout backend");
      isSigned = false;
}});


const signUp = async (signUpEmail,signUpPassword) => {
  // check validation signUpEmail,signUppassword
  // console.log("hello-signup",signUpEmail,signUpPassword);
    try {
      const user = await createUserWithEmailAndPassword(auth,signUpEmail,signUpPassword);
      console.log("hello-signup",user,signUpEmail,signUpPassword);
    } catch (error) {
      console.log("signup",error.message);
}};

const signIn = async (signInEmail,signInPassword) => {
    try{
      console.log("hello-signIn",signUpEmail,signUpPassword);
      await signInWithEmailAndPassword(auth,signInEmail,signInPassword).then(isSigned=true);

    } catch (error){
      isSigned = false;
      console.log(error.message);
}};

const logOut = async () => {
    try {
      await signOut(auth).then(()=>{isSigned=false;});
      console.log("logout called");
    } catch (error){
      console.log(error.message,"thidddd");
}};

const deleteAccount = async () => {
      try {
        await deleteUser(user);
      } catch (error){
        console.log(error.message);
}};


export {
    signIn,
    signUp,
    logOut,
    deleteAccount,
    isSigned
    };