import { useState } from "react";
import Header from "../component/header/header";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Login.module.css";
import lodingImg from "../public/assets/img/loding.gif";
import {
  signUp,
  signIn,
  logOut,
  deleteAccount,
  isSigned,
} from "../modules/authentication/emailPassword/conectAuth";
import { signInWithGoogle } from "../modules/authentication/signinwithgoogle/googleapiconfig/googleApi";
import { userSignUpDb, userSignInDb, sendOtp } from "../modules/backend/db/db";

export default function Login(type) {
  const [lodingIcon, setLodingIcon] = useState(false);
  const [loginbtnText, setLoginbtnText] = useState("login");

  const [signUp_error, setSignUp_error] = useState(false);
  const [otpSend, setotpSend] = useState(false);
  const [otpCheck, setotpCheck] = useState(false);
  const [message, setMessage] = useState();

  function loginContainerbtn(p) {
    if (p == "login") {
      setLoginbtnText("login");
    } else {
      setLoginbtnText("signUp");
    }
  }

  let email_store = "";
  let password_store = "";
  function setEmailPasswordbtn(check_e, p) {
    //setemail,checkemail,password

    if (check_e == "e") {
      email_store = p;
    }
    if (check_e == "p") {
      password_store = p;
      console.log("kk", email_store, password_store);
    }
  }

  // auth control function
  async function signInFn() {
    setLodingIcon(true);
    await signIn(email_store, password_store)
      .then((userUid) => {
        console.log("user uid = ", userUid);
        if (isSigned) {
          setFrame(userSignedDom(logOutfn));
        }
      })
      .then(() => setLodingIcon(false));
  }
  const logOutfn = () => {
    logOut().then(() => {
      // setFrame(signInDom(signInFn))
    });
  };
  const signUpFn = () => {
    setLodingIcon(true);

    signUp(email_store, password_store).then((error) => {
      // setFrame(userSignedDom(logOutfn))

      console.log(error);
      error ? setSignUp_error(true) : setSignUp_error(false);
      setTimeout(() => {
        setSignUp_error(true);
      }, 2000);

      setLodingIcon(false);
    });
    email_store = "";
    password_store = "";
  };

  // call mongodb to
  async function btnClick(callName, ...args) {
    let redirectUrl = "http://localhost:3000";
    let [email, pwd] = args;
    console.log("btnClick call:-", callName, email, pwd);
    if (callName === "signUp") {
      setLodingIcon(true);
      await userSignUpDb(email, pwd).then((r) => {
        console.log("server_response:-", r);
        Object.keys(r)[1] == "message" ? setMessage(r.message) : null;
        Object.keys(r)[1] == "message"
          ? setTimeout(() => {
              setMessage(null);
            }, 5000)
          : null;
        if (r) {
          r.active == false ? setotpSend(true) : null;
          setLodingIcon(false);
        } else {
          console.log("signUp", r);
          setLodingIcon(false);
        }
      });
    }
    if (callName == "login") {
      setLodingIcon(true);

      await userSignInDb(email, pwd).then(
        (r) => {
          console.log("login", r);
          setLodingIcon(false);
          if (!r) {
            setMessage("sign_in_error", r);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          }
          // window.location.assign(redirectUrl)
        },
        (e) => console.log("login_error:-", e)
      );
    }
    if (callName === "verify") {
      setLodingIcon(true);
      let [email, otp] = args;
      await sendOtp(email, otp).then((r) => {
        setotpCheck(true);
        console.log(otp, "sendOtpStatus", r);
        let verifyElem = document.getElementById("verify");
        Object.keys(r).forEach((element) => {
          element == "active" && r.active == true
            ? (verifyElem.style.border = "1px solid green")
            : null;
        });
        setLodingIcon(false);
      });
    }
  }

  const description = "About page description description";
  return (
    <>
      <Head>
        <title>login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content={description} />
        <Script src="" strategy="lazyOnload" onLoad={() => {}} />
      </Head>

      <Header />
      <main className={styles.maindiv}>
        <div className={styles.headerdiv}>QWERTY</div>
        <div className={styles.maindivchild}>
          <div className={styles.loginsectionh1}>
            <div className={styles.inputdivborder}>
              <div className={styles.inputdiv}>
                <div className={styles.lsc1}>
                  <div
                    id="login-text"
                    className={styles.scd1}
                    onClick={() => {
                      loginContainerbtn("login");
                      document.getElementById("email").value = "";
                      document.getElementById("pwd").value = "";
                    }}
                  >
                    login
                  </div>
                  <div
                    id="signUp-text"
                    className={styles.scd12}
                    onClick={() => loginContainerbtn("signUp")}
                  >
                    sign up
                  </div>
                </div>

                {/* email input field*/}
                <input
                  className={styles.input}
                  onChange={(event) => {
                    //? add features to pre cheack email exist or not for login
                    // loginbtnText == "login" ? emailExist(event.target.value):null;
                    setEmailPasswordbtn("e", event.target.value);
                  }}
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  id="email"
                  maxLength="40"
                />

                <br />

                {/* password input field*/}
                <input
                  className={styles.input}
                  onChange={(event) => {
                    setEmailPasswordbtn("p", event.target.value);
                  }}
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  id="pwd"
                  pattern="{a-z0-9}"
                  minLength="6"
                  maxLength="24"
                />
                {/* verify */}
                <input
                  style={{ display: otpSend ? "block" : "none" }}
                  className={styles.inputOtp}
                  onChange={(e) => {
                    let email = document.getElementById("email").value;
                    if (e.target.value.length == 6) {
                      btnClick("verify", email, e.target.value);
                    }
                  }}
                  type="text"
                  name="verify"
                  required
                  placeholder="verify"
                  id="verify"
                  pattern="{a-z0-9}"
                  maxLength="6"
                />
                <div className={styles.btnsec}>
                  {/* button */}
                  <button
                    type="submit"
                    id="login-btn-text"
                    className={styles.loginbtn}
                    onClick={function (event) {
                      //mongodb call signup/login
                      let email = document.getElementById("email").value;
                      let pwd = document.getElementById("pwd").value;
                      console.log("email=", email, "pwd=", pwd);
                      let dd = loginbtnText;
                      console.log("button_value:-", dd);
                      email && pwd
                        ? null
                        : setMessage("provide email & password");
                      email && pwd
                        ? btnClick(loginbtnText, email, pwd)
                        : setTimeout(() => {
                            setMessage(null);
                          }, 3000);

                      //firbase call signup/login
                      // e.target.value == "login" ? signInFn() : signUpFn();
                    }}
                  >
                    {loginbtnText}
                  </button>

                  <div style={{ display: signUp_error ? "block" : "none" }}>
                    email all-ready exist
                  </div>

                  <Image
                    src={lodingImg}
                    style={{
                      display: lodingIcon ? "block" : "none",
                    }}
                    className={styles.loding_gif}
                    alt="loding..."
                  />
                </div>

                <button
                  className={styles.loginbtn_google}
                  onClick={() => {
                    signInWithGoogle();
                  }}
                >
                  <span className={styles.signInWithGoogle}></span>
                  <span className={styles.googletext}>SignIn with google</span>
                </button>
                <div
                  style={{ display: true ? "block" : "block" }}
                  className={styles.messageBox}
                >
                  {message}
                </div>
              </div>
            </div>
          </div>

          {/* section 2 right */}
          <div className={styles.sp2}>
            <div className={styles.s2c}>
              <div>
                1 Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                elit. Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>{" "}
              <br />
              <div>
                2 Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                elit. Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                3 Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                elit. Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Tenetur iusto beatae ipsam <br /> quod perferendis! Labore
                beatae praesentium <br /> iste eos placeat possimus suscipit{" "}
                <br /> pariatur dolorum exercitationem, <br /> dolorem ullam
                culpa obcaecati molestias.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
