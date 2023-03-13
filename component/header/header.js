import styles from  "./header.module.css"
import Link from "next/link"
import  Userprofile from "../profile/profile";
import React,{ Profiler, useState } from "react";
import { PreviousSignedUser,isSigned } from "../../modules/authentication/emailPassword/conectAuth";
export default function Header(props) {
  const [isShowing,setIsShowing] = useState(false);
  const [isUserSigned,setUserSigned] = useState(false) //from connectAuth


    // PreviousSignedUser((check)=>{
    //   // console.log("return callback",check);
    //   setUserSigned(check);
    // })



    {/* user container toggel*/}

    return (
        <>
        <div className={styles.headerMain}>


            <ul className={styles.headerSection}>
              <Link className={`${styles['headerLabel']} ${styles['header-anchor']}`} href="/">{'home'}</Link>
              <Link className={`${styles['headerLabel']} ${styles['header-anchor']}`} href="/blog">{'blogs'}</Link>
              <Link className={`${styles['headerLabel']} ${styles['header-anchor']}`} href="/projects">{'projects'}</Link>
              <Link className={`${styles['headerLabel']} ${styles['header-anchor']}`} href="/favorite">{'favorite'}</Link>
              <Link className={`${styles['headerLabel']} ${styles['header-anchor']}`} href="/login" style={{display: isUserSigned?"none":"none"}} >{'signIn'}</Link>

              <div className={styles.headerLabel} style={{display: true?"block":"none"}}>

                <img
                className={styles.userImg}
                onClick={()=>setIsShowing(!isShowing)} src="assets/icon/user.svg" alt="sd" />
              </div>
            </ul>
            </div>

           {/* profile ui */}
           {isShowing && (
              <Userprofile state={setIsShowing}/>
              )}


        </>
    );
}
