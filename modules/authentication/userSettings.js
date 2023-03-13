import { getAuth, updateProfile,updateEmail,updatePassword } from "firebase/auth";
import { auth } from "./loginapiconfig/firebaseOAuth";


const updateBasicInfo = (displayName,photoUrl)=>{
    // photoUrl = "https://example.com/jane-q-user/profile.jpg"
    //what if photo url null/undefined will it save path as undefined||null?
        updateProfile(auth.currentUser,{
            displayName: displayName.toString(),
            photoURL: photoUrl
        })
        .then(()=>{console.log("email-updated");})
        .catch((error)=>console.log("updateBasicinfo error",error))
};

const updateEmail = (email)=>{
    updateEmail(email).then(()=>{console.log("email-updated");}).catch((error)=>{console.log("updateEmail error");})
};

