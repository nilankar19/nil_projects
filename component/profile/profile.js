import profile from "./profile.module.css"
import React,{ Profiler, useEffect, useState } from "react";
import Image from "next/image";
import dummyAvatar from "../../public/assets/a.png"
import { getImageUrl } from "../getimageurl";
import  {userlink,userProfile} from "../../pages/api/profileApi";






export default function Userprofile(props) {



  let userIcon = userProfile[0];

    const [state,setState] = useState(true);
    return (
      <>
        <div id="profileDashboard" className={profile.p_Div}>
          <div className={profile.userSection}>

              <div className={profile.section_1}>
              <div className={profile.p_Div_userIcon}>

                <Image
                  className={profile.profileImg}
                  src={getImageUrl(userIcon)}
                  id="Avatar"
                  width={32}
                  height={32}
                  alt="sd"
                />

              </div>
              <div className={profile.p_Div_userEmail}>
                <div>{userProfile[0].displayName}</div>
                <div>{userProfile[0].email}</div>
              </div>
            </div>
            <div className={profile.section_2}>
              <div>Account Settings</div>
              <div>feedback</div>
              <div>Get help</div>
              <div>privacy policy</div>
              <div>Sign Out</div>

            </div>
            </div>



        </div>
      </>
    );

}