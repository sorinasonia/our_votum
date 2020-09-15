import React, { useState } from 'react';
import Popup from "./Popup";
import { FaApple, FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value=" REGISTER "
      onClick={togglePopup}
      className = " register "
    />
    
    {isOpen && <Popup
      content={<>
      
        <div className = "container" >

          <div className = "sign-up-details" id = "trans" >

              <b> Sign Up</b>
                <p> By continuing, you agree to our User Agreement and Privacy Policy.  </p>
              
            <div className = "info" > 
              <b>  Register</b>
              <input type = "text" placeholder = "Email Address" />
              <input type = "text" placeholder = "Username" />
              <input type = "text" placeholder = "Password" />
              
              <button className = "continue" > CONTINUE </button>

            </div>

            <div className = "social" > 

                <b > OR</b>
            
              <button className = "facebook" > <FaFacebookF/> SIGN UP WITH FACEBOOK </button>
              <button className = "goole" > <FaGoogle/> SIGN UP WITH GOOGLE </button>
              <button className = "apple" > <FaApple/> SIGN UP WITH APPLE </button>
            
            </div>

          </div>

        </div>  
       
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Signup;