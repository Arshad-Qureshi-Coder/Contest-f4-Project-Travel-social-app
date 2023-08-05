import React from "react"
import imgHome from "../images/home-Icon.png"
import imgNotification from "../images/Notification-icon.png"
import imgItems from "../images/item-Icon.png"
import imgProfile from "../images/profile-icon.png"
import { useNavigate } from "react-router-dom"

const Navbar =()=>{
const navigate =useNavigate()

    return(
        <div>

        <div className="navbar-container">
            <h2 onClick={()=>navigate("/")}>TravelMedia.in</h2>
            <div className="center-icon">
               <img src={imgHome} alt="icon" onClick={()=>navigate("/")}/> 
               <img src={imgNotification} alt="icon"/> 
               <img src={imgItems} alt="icon" onClick={()=>navigate("/detail/1")}/> 
               <img src={imgProfile} alt="icon"/> 
            </div>
          </div>

        </div>
    )
}
export default Navbar