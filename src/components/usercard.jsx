// write the component code here
import React from "react";
import "./usercard.css"; 
const Usercard = () => {
  
  const profilePhoto = "https://i.pinimg.com/736x/3d/f7/27/3df72713085d7b0d3896684b381d4c73.jpg"; 
  const name = "Johnny Sins";
  const email = "johnnySins@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, Springfield, USA";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">Email: {email}</p>
      <p className="usercard-phone">Phone: {phone}</p>
      <p className="usercard-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;