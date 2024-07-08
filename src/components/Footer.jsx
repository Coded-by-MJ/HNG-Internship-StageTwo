

import { FaPhoneAlt } from "react-icons/fa";
import appleStore from "../assets/appstore.png";
import googlePlay from "../assets/googleplay.png";
import  logo from "../assets/footerLogo.png";


const Footer = () => {
  return (
    <footer>
         <div className="footer_one">
            <div className="sub_heading">
                <h2>Subscribe to Our FREE VIP Email Alerts.</h2>
                <p>Sign up today and never miss our new books and sales deals again.</p>
            </div>

            <div className="sign_up">
                <div className="signUp_field">
                    <input 
                    type="email"
                    placeholder="Enter your email"
                    
                    />

                    <button className="addCart">
                       Sign Up
                    </button>
                </div>

                <div className="store_wrap">
                    <span>
                        Download Mobile App
                    </span>

                    <div className="store_imgs">
                    <img src={appleStore} alt="app store" />
                    <img src={googlePlay} alt="google play" />
                    </div>
                   
                </div>
            </div>

         </div>

         <div className="footer_two">
              <img src={logo} alt="footer logo"></img>
              <div className="contact">
                 <FaPhoneAlt className="call_icon" />
                  <span>Contact</span>
              </div>
               <span>
                 wise’R’books. All rights Reserved
               </span>
               <div className="foot_links">
                  <span>Privacy</span>
                  <span>Terms</span>
               </div>
         </div>
    </footer>
  )
}

export default Footer