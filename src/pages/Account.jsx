import { useState } from "react";
import AccountSidebar from "../components/AccountSidebar";
import AccountOverview from "../components/AccountOverview";
import AccountCourses from "../components/AccountCourses";
import AccountCertificates from "../components/AccountCertificates";
import AccountPrivacy from "../components/AccountPrivacy";
import "../styles/account.css";

export default function Account(){

  const [tab,setTab] = useState("overview");

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const email = user?.email;

  const [profileImage, setProfileImage] = useState(() => {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || {};
    return profiles[email]?.image || null;
  });

  return (

    <div className="account-page">

      <AccountSidebar
        tab={tab}
        setTab={setTab}
        profileImage={profileImage}
      />

      <div className={`account-content ${tab === "privacy" ? "privacy-fix" : ""}`}>

        {tab === "overview" && (
          <AccountOverview profileImage={profileImage}/>
        )}

        {tab === "courses" && <AccountCourses/>}

        {tab === "certificates" && <AccountCertificates/>}

        {tab === "privacy" && (
          <AccountPrivacy
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
        )}

      </div>

    </div>

  );

}