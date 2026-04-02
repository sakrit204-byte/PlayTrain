import { useState } from "react";

export default function AccountPrivacy(){

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [name,setName] = useState(user.username);
  const [currentPassword,setCurrentPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [photo,setPhoto] = useState(user.photo || "");

  const [showModal,setShowModal] = useState(false);

  const handlePhoto = (e) => {

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);

  };

  const removePhoto = () => {
    setPhoto("");
  };

  const saveChanges = () => {

    const users = JSON.parse(localStorage.getItem("users"));

    const updated = users.map(u => {

      if(u.email === user.email){

        if(newPassword){
          if(currentPassword !== u.password){
            alert("Current password incorrect");
            throw new Error("Password validation failed");
          }
        }

        return {
          ...u,
          username:name,
          password: newPassword ? newPassword : u.password,
          photo:photo
        };

      }

      return u;

    });

    localStorage.setItem("users",JSON.stringify(updated));

    const updatedUser = {
      ...user,
      username:name,
      photo:photo
    };

    localStorage.setItem("currentUser",JSON.stringify(updatedUser));

    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    window.location.reload();
  };

  return(

    <div className="privacy-section">

      <h2>Privacy Settings</h2>

      <div className="photo-section">

        <div className="photo-preview">

          {photo ? (
            <img src={photo} alt="profile"/>
          ) : (
            <i className="fa-regular fa-circle-user"></i>
          )}

        </div>

        <div style={{display:"flex", gap:"10px"}}>

          <label className="upload-btn">
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              hidden
            />
          </label>

          {photo && (
            <button className="remove-photo-btn" onClick={removePhoto}>
              Remove
            </button>
          )}

        </div>

      </div>

      <label>Name</label>

      <input
        value={name}
        onChange={e=>setName(e.target.value)}
      />

      <label>Current Password</label>

      <input
        type="password"
        placeholder="Enter current password"
        onChange={e=>setCurrentPassword(e.target.value)}
      />

      <label>New Password</label>

      <input
        type="password"
        placeholder="Leave blank to keep current password"
        onChange={e=>setNewPassword(e.target.value)}
      />

      <button onClick={saveChanges}>
        Save Changes
      </button>

      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h3>Changes Saved</h3>
            <p>Your account has been updated.</p>

            <button
              className="confirm-btn"
              onClick={handleConfirm}
            >
              OK
            </button>

          </div>

        </div>
      )}

    </div>

  );

}