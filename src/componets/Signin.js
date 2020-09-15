import React, { useState } from 'react';
import Popup from "./Popup";
import { FaApple, FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Signin.css";

function Signin() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value=" LOGIN "
      onClick={togglePopup}
      className = " login "
    />
    
    {isOpen && <Popup
      content={<>
      
        <div className = "container" >

          <div className = "sign-in-details" id = "trans" >

              <b> Sign In</b>
              
            <div className = "info" > 
            
              <input  type = "text" placeholder = "Email Address | Username " />
              <input  type = "text" placeholder = "Password" />
              
              <button className = "continue" > CONTINUE </button>

            </div>

            <div className = "social" > 

                <b > OR</b>
            
              <button className = "facebook" > <FaFacebookF/> CONTINUE WITH FACEBOOK </button>
              <button className = "goole" > <FaGoogle/> CONTINUE WITH GOOGLE </button>
              <button className = "apple" > <FaApple/> CONTINUE WITH APPLE </button>
            
            </div>

          </div>

        </div>  
       
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Signin;