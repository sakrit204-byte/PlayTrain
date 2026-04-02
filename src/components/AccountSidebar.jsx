export default function AccountSidebar({tab,setTab}){

  return(

    <div className="account-sidebar">

      <h3>Dashboard</h3>

      <button
        className={tab==="overview" ? "active":""}
        onClick={()=>setTab("overview")}
      >
        Overview
      </button>

      <button
        className={tab==="courses" ? "active":""}
        onClick={()=>setTab("courses")}
      >
        Enrolled Courses
      </button>

      <button
        className={tab==="certificates" ? "active":""}
        onClick={()=>setTab("certificates")}
      >
        Certificates
      </button>

      <button
        className={tab==="privacy" ? "active":""}
        onClick={()=>setTab("privacy")}
      >
        Privacy
      </button>

    </div>

  );
}