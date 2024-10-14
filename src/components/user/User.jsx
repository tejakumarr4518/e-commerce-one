import "./User.css";
import React, { useState } from "react";
function User({user}){
   
    return(
        <div className="usercard">
    <img src={user.picture.medium} height={"275"}  width={"100%"}/>
    <h3>{user.name.first}{user.name.last}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, qui.</p>
    <p>{user.gender}</p>
    <button>Get User</button>
        </div>
    )
}
export default User;