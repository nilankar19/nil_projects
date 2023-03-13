import React, {useState} from 'react'
import {signUp,signIn,logOut,deleteAccount,isSigned} from "./conectAuth";
import { toggel } from "../../component/header/header";
import styles from "./L.module.css"

export default function Login(props) {
  // console.log(props.profileClick,"login");
if(props.profileClick){
//-----------------------------------------------------------------
let email_store = "";
let password_store= "";
function setEmailPasswordbtn(check_e,p){
  //setemail,checkemail,password
if(check_e=="e"){email_store = p}
if(check_e=="p"){password_store =  p}
}

//signUp window----------------------------------------------------
   const createAccount = (signUpFn)=> {
    setFrame(
      <>
        <div onMouseLeave={toggel} className={styles.createAccount}>
          <div  className={styles.createAccount_header} onClick={()=>setFrame(mainFrameWindow)}>
            <span className={styles.backIcon}></span>
            </div>
            <h3 >signUp</h3>
            <br />
            <input
              className={styles.createaccount_inputbox_loginpage}
              onChange={(event) => {setEmailPasswordbtn("e",event.target.value);}}
              type="email"
              name="email"
              placeholder="email"
              autoComplete="on" />
            <br />
            <input
              className={styles.createaccount_inputbox_loginpage}
              onChange={(event) => {setEmailPasswordbtn("p",event.target.value);}}
              type="password"
              name="password"
              placeholder="password"
              autoComplete="on" />
            <button className={styles.createaccount_inputboxbtn_loginpage} onClick={signUpFn} >signUp</button>
            <br />
            <br />
             <div className={styles.signInWithGoogle}>
              <span className={styles.googleIcon}></span>
              <span className={styles.googleBtnText}>signUp with google</span>
            </div>
             <div className={styles.signInWithGoogle}>
              <span className={styles.githubIcon}></span>
              <span className={styles.googleBtnText}>signUp with gitHub</span>
            </div>
             <div className={styles.signInWithGoogle}>
              <span className={styles.facebookIcon}></span>
              <span className={styles.googleBtnText}>signUp with Facebook</span>
            </div>
        </div>
        </>
    )
   };
//signed html window--------------------------------------------------------
   function userSignedDom(logOutfn){
    return(
       <>
        <div
         className={styles.createAccount}
         style={{display : isSigned?"block":"none",width :"40%"}}>
          <div className={styles.signedSectionHeader}>


            <img
              className={styles.userImg}
              src={"assets/icon/user.svg"}
              alt="userImg" />
              <div className={styles.signedSectionHeaderInline}>
                <div className={styles.sSHUsername}>{"GoApple"}</div>

                <div className={styles.sSHemailText}>{"goapple73@gmail.com  "}</div>
              <br/>
              </div>
            </div>
            {/* logout */}
            <div className={styles.userActionbtn}>
                <button className={styles.inputboxbtn_loginpage} onClick={logOutfn}>logout</button>
                <button className={styles.inputboxbtn_loginpage} onClick={deleteAccount}>DeleteAccount</button>
          </div>

       </div>
     </>
    )
   }
//signIn html window-----------------------------------------------------------
   function signInDom(signInFn,signUpFn) {
    return (
      <>
          <div className={styles.createAccount}>
            <div className={styles.createAccount_card}>

            <div className={styles.createAccount_section01}>
            <h3 className={styles.signInDom_text}>LogIn</h3>
            <h5 className={styles.createAccount_text} onClick={()=>{createAccount(signUpFn)}}>create account</h5>
            </div>
           <br />
            <div>
              <div>G</div>
              <div>F</div>
              <div>M</div>
            </div>

            <div className={styles.inputLoginbox}>
              <input
                  className={styles.inputbox_loginpage}
                  onChange={(event) => {setEmailPasswordbtn("e",event.target.value);}}
                  type="email"
                  name="email"
                  placeholder="email" />
              <br />
              <input
                  className={styles.inputbox_loginpage}
                  onChange={(event) => {setEmailPasswordbtn("p",event.target.value)}}
                  type="password"
                  name="password"
                  placeholder="password" />
              <button className={styles.inputboxbtn_loginpage} onClick={signInFn}>login</button>
            </div><br/>
            <div className={styles.signInWithGoogle}>
              <span className={styles.googleIcon}></span>
              <span className={styles.googleBtnText}>signIn with google</span>
            </div>


            {/* <div className={}>
    <a className={} href="https://login.apiary.io/auth/github">
      <i className={} aria-hidden="true"></i> Continue with GitHub</a>
    <a className={} href="https://login.apiary.io/auth/twitter">
      <i class="aui-i-twitter" aria-hidden="true"></i> Continue with Twitter</a>
  </div> */}

            </div>


          </div>
        </>
    );
   }
//just update the userWindow by writing dom function outside of mainFrameWindow () that return html and
//with tag [name]fn inside mainFraneWindow ()   use setFrame to set when on click event fire
   const mainFrameWindow = ()=>{

    function signInFn(){
      signIn(email_store,password_store);
      if(isSigned){setFrame(userSignedDom(logOutfn))};
    }
    const logOutfn =()=>{
      logOut().then(()=>{setFrame(signInDom(signInFn))})
     }
    const signUpFn = ()=>{
      signUp(email_store,password_store).then(()=>{setFrame(userSignedDom(logOutfn))})
      email_store = "";
      password_store = "";
    }
     //onload exec
    if (props.profileClick && isSigned) {
      return userSignedDom(logOutfn);
    }else{
      return signInDom(signInFn,signUpFn);
    }
   };
   const [mainFrameLogin, setFrame] = useState(mainFrameWindow);

return mainFrameLogin;
  }
}
